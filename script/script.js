var historySortHeader;
var historyFunction;
var directoryPath;
var globalSearchValue;
var historySortTrack = {
  book_id: 0,
  created_at: 0,
  due_date: 0,
  issue_date: 0,
  name: 0,
  status: 0,
  title: 0,
  updated_at: 0,
  user_id: 0,
};

function tableHeader(data) {
  historySortHeader = data;

  var fetchSortUrl;
  var iconSelector;
  $(".no-display").hide();
  if (historySortTrack[data] === 0) {
    iconSelector = "#" + data + "0";
    $(iconSelector).show();
    fetchSortUrl = directoryPath + `api/borrow?sort=` + data + `&desc=0`;
    historySortTrack[data] = 1;
  } else {
    iconSelector = "#" + data + "1";
    $(iconSelector).show();
    fetchSortUrl = directoryPath + `api/borrow?sort=` + data + `&desc=1`;
    historySortTrack[data] = 0;
  }

  $.ajax({
    type: "GET",
    url: fetchSortUrl,
    dataType: "json",
    async: true,
    success: function (data, status) {
      historyFunction(data);
    },
    error: function (data, status) {},
  });
}

$(document).ready(function () {
  var output;
  var target_category_id;
  var pageNo = "1";
  var location = window.location.href;
  directoryPath = location.substring(0, location.lastIndexOf("/") + 1);

  $("#inventory").css("background-color", "#2f0410");

  /*-----------------------------------load category on start---------------------------------*/
  function loadCategoryCard() {
    $.ajax({
      type: "GET",
      url: directoryPath + "api/category/",
      dataType: "json",
      async: true,
      success: function (data, status) {
        var category = data["message"];
        $("#book-card").empty();
        for (let i = 0; i < category.length; i++) {
          var card =
            `<button class="category-card-click m-3" id="` +
            category[i].category_id +
            `"><div class="col-lg-4 ">
                <div class="card h-90 category-card-tarnsparent" style="width:280px;height:220px;margin:0;padding:0;">
                  <div class="card-body py-5" id="card-body">
                    <h4 class="card-title text-center">` +
            category[i].category_name +
            `</h4>
                  </div>
                <div class="card-footer">
                <div class ="container-fluid">
                  <div class ="row">
                      <div class ="col-md-6 col-sm-6">
                          <h5 class="">` +
            category[i].category_count +
            `</h5>
                        </div>
                        <div class ="col-md-6 col-sm-6 text-center ps-5">                                               
                          <i class="fas fa-2x fa-plus-circle "></i>                                                
                        </div>
                  </div>
              </div>
            </div>
          </div>
      </div></button>`;

          $("#book-card").append(card);
        }
      },
    });
  }

  loadCategoryCard();
  /*----------------------------------------show book details in inventory tab-------------------------------*/
  function showBookDetails(data, whichTable) {
    $(whichTable).empty();
    console.log(pageNo);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      var content =
        `<tr>
            <th scope="row">` +
        (i + 1 + (pageNo - 1) * 5) +
        `</th>
                                    <td>` +
        data[i].title +
        `</td>
                                    <td>` +
        data[i].author_name +
        `</td>
                    <td>
                        <div class="float-center">
                            <button type="button" class="btn btn-success badge-pill issue-book-button" style="width: 80px;" id="` +
        data[i].book_id +
        `">Issue</button>
                            <button type="button" class="btn btn-primary badge-pill update-button" style="width: 80px;"id="` +
        i +
        `">Update</button>
                            <button type="button" class="btn btn-danger badge-pill delete-book-button" style="width: 80px;" id="` +
        data[i].book_id +
        `">Delete</button>
                        </div>
            </td>
        </tr>`;
      $(whichTable).append(content);
    }
  }

  var users_list = [];
  var user_info;
  var book;
  /*---------------------------------------global search option inventory tab--------------------------------*/
  $("#book-details-table,#global-search-result-table").on(
    "click",
    ".issue-book-button",
    function (e) {
      var btn_id = $(this).attr("id");

      $.ajax({
        type: "GET",
        url: directoryPath + `api/books/` + btn_id,
        dataType: "json",
        async: true,
        success: function (data, status) {
          book = data["message"][0];
          var book_info =
            `<b>Title:</b> ` +
            book.title +
            `<br><br>
        <b>Author:</b> ` +
            book.author_name +
            `<br><br>
        <b>Publisher:</b> ` +
            book.publisher +
            `<br><br>        
        <b>Published:</b>` +
            book.pub_year +
            `<br><br>
        <b>Available copy:</b> ` +
            book.current_count +
            `<br><br>
        <b>ISBN:</b> ` +
            book.isbn +
            `
        `;
          $("#issue-user-search").val("");
          $("#book-issue-user-info").empty();

          $("#book-issue-book-info").empty();
          $("#book-issue-book-info").append(book_info);
          if (book.current_count > 0) {
            $("#book-avalability").empty();
            $("#book-avalability").append(
              `<h5 class="bg-success mx-5 p-2 rounded">Available</h5>`
            );
          } else {
            $("#book-avalability").empty();
            $("#book-avalability").append(
              `<h5 class="bg-danger mx-5 p-2 rounded">Not available</h5>`
            );
          }

          $("#issue-book-modal").show();
        },
      });

      $.ajax({
        type: "GET",
        url: directoryPath + `api/users/`,
        dataType: "json",
        async: true,
        success: function (data, status) {
          var users = data["message"];
          user_info = user_info;
          if (users_list.length == 0) {
            for (let i = 0; i < users.length; i++)
              users_list.push(users[i].user_id + ". " + users[i].name);
          }
        },
      });
    }
  );
  /*--------------------------------------issue book button---------------------------------*/
  $("#book-issue-btn").on("click", function () {
    user_id = $("#issue-user-search").val().split(".");
    let data = {
      book_id: "",
      user_id: "",
    };
    var url = directoryPath + "api/borrow";
    data.book_id = book.book_id;
    data.user_id = user_id[0];
    if (data.book_id != "" && data.user_id != "") {
      if (confirm("Confirm book issue?")) {
        $.post(url, JSON.stringify(data), function (msg) {
          $("#result").html(msg);
        });
        $("#issue-book-modal").hide();
      }
    } else {
      alert("please select a user to issue book.");
    }
  });

  /*----------------------------------------book update button-------------------------------*/
  $("#book-details-table,#global-search-result-table").on(
    "click",
    ".update-button",
    function (e) {
      var btn_id = $(this).attr("id");

      $("#edit-book-modal").show();

      $("#book-name").attr("value", output[btn_id].title);
      $("#auth-name").attr("value", output[btn_id].author_name);
      $("#pub-year").attr("value", output[btn_id].pub_year);
      $("#pub").attr("value", output[btn_id].publisher);
      $("#isbn").attr("value", output[btn_id].isbn);
      $("#total").attr("value", output[btn_id].total_count);

      $("#edit-book-form").submit(function (e) {
        /*alert($("#book-name").val());*/
        output[btn_id].title = $("#book-name").val();
        output[btn_id].author_name = $("#auth-name").val();
        output[btn_id].pub_year = $("#pub-year").val();
        output[btn_id].publisher = $("#pub-year").val();
        output[btn_id].isbn = $("#isbn").val();
        output[btn_id].total_count = $("#total").val();

        var url = "api/books/" + output[btn_id]["book_id"];
        console.log(url);
        e.preventDefault();

        $.ajax({
          url: url,
          type: "PUT",
          dataType: "json",
          data: JSON.stringify(output[btn_id]),
          success: function (data, textStatus, xhr) {
            loadPagination(pageNo);
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log("Error in Operation");
          },
        });

        $("#edit-book-modal").hide();
      });
    }
  );
  /*---------------------------book delete button----------------------------------*/
  $("#book-details-table,#global-search-result-table").on(
    "click",
    ".delete-book-button",
    function (e) {
      console.log($(this).closest("tbody").attr("id"));
      var targetTable = "#" + $(this).closest("tbody").attr("id");
      console.log(targetTable);
      var btn_id = $(this).attr("id");

      var createDeleteUrl = directoryPath + "api/books/" + btn_id;

      $("#delete-confirm").show();

      $("#delete-confirm").on("click", "button", function () {
        var deleteStatus = $(this).attr("id");

        if (deleteStatus === "cancel") {
          $("#delete-confirm").hide();
        }

        if (deleteStatus === "confirm") {
          $("#delete-confirm").hide();
          var dataFetch;

          $.ajax({
            type: "DELETE",
            url: createDeleteUrl,
            dataType: "json",
            async: true,
            success: function (data, status) {
              if (targetTable === "#global-result-tbody") {
                dataFetch =
                  directoryPath + "/api/books/?value=" + globalSearchValue;
              } else {
                dataFetch =
                  directoryPath +
                  `api/books/?column=category_id&value=` +
                  target_category_id;
              }

              $.ajax({
                type: "GET",
                url: dataFetch,
                dataType: "json",
                async: true,
                success: function (data, status) {
                  output = data["message"];
                  console.log("dddddddddddddddddddd");
                  console.log(targetTable);
                  showBookDetails(output, targetTable);
                },
                error: function (data) {},
              });
            },
            error: function (data) {
              alert("failed");
            },
          });
        }
      });
    }
  );

  /*-------------------------category card click button----------------------------*/
  $("#book-card").on("click", ".category-card-click", function (e) {
    target_category_id = $(this).attr("id");

    $("#main-body").hide();

    var crateUrl =
      directoryPath +
      `api/books/?column=category_id&value=` +
      target_category_id;

    $.ajax({
      type: "GET",
      url: crateUrl,
      dataType: "json",
      async: true,
      success: function (data, status) {
        output = data["message"];
        showBookDetails(output, "#category-book-result");
      },
      error: function (data) {},
    });
  });

  /*-----------------------------add new book option----------------------------------*/
  $("#book-details").on("click", "#float-button", function (ev) {
    /* alert("float button clicked");*/
    $("#add-book-modal").show();
    ev.preventDefault();

    $("#add-book-form").submit(function (e) {
      /*alert("submit attempted");*/
      e.preventDefault();
      let data = {
        title: "",
        author_name: "",
        pub_year: "",
        isbn: "",
        total_count: "",
        current_count: "",
        category_id: "",
        publisher: "",
      };

      var url = directoryPath + "api/books";

      console.log(data);

      data.title = $("#mAB-book-name").val();
      data.author_name = $("#mAB-author-name").val();
      data.pub_year = $("#mAB-pub-year").val();
      data.publisher = $("#mAB-publisher").val();
      data.isbn = $("#mAB-isbn").val();
      data.total_count = $("#mAB-total-count").val();
      data.current_count = $("#mAB-total-count").val();
      data.category_id = $("#mAB-category-id").val();

      console.log(JSON.stringify(data));

      $.post(url, JSON.stringify(data), function (msg) {
        $("#result").html(msg);
      });

      $("#add-book-modal").hide();
    });
  });
  /*-------------------------category card click button----------------------------*/
  $("#book-card").on("click", ".category-card-click", function (e) {
    target_category_id = $(this).attr("id");

    $("#main-body").hide();

    var crateUrl =
      directoryPath +
      `api/books/?column=category_id&value=` +
      target_category_id;

    $.ajax({
      type: "GET",
      url: crateUrl,
      dataType: "json",
      async: true,
      success: function (data, status) {
        output = data["message"];

        buildPagination(output.length);
        pageNo = "1";
        loadPagination("1");
      },
      error: function (data) {},
    });

    $("#book-details").show();
    $("#pagination-div").show();
  });
  /*-------------------------toggle button for side bar----------------------------*/
  $("#more").click(function () {
    $("#sidebar").toggle();
  });

  /*-----------------------inventory tab click function----------------------------*/
  $("#inventory").click(function () {
    $("#inventory").css("background-color", "#2f0410");
    $("#users").css("background-color", "");
    $("#history").css("background-color", "");
    $("#dashboard").css("background-color", "");

    $("#book-details").hide();
    $("#history-tab-body").hide();
    $("#user-list-div").hide();
    $("#dashboard-body").hide();
    $("#main-body").show();
    loadCategoryCard();
  });

  /*---------------------------book search inside category wise book list---------------*/
  $("#book-search-input").on("keyup", function () {
    var bookname = $(this).val();
    var searchBy = $("#book-search-dropdown option:selected").val();

    console.log(bookname.length);
    if (bookname.length > 0) {
      var crateUrl =
        directoryPath +
        `api/books/?category_id=` +
        target_category_id +
        `&column=` +
        searchBy +
        `&value=` +
        bookname;

      $.ajax({
        type: "GET",
        url: crateUrl,
        dataType: "json",
        async: true,
        success: function (data, status) {
          output = data["message"];
          showBookDetails(output, "#category-book-result");
        },
        error: function (data, status) {
          pageNo = "1";
          loadPagination("1");
        },
      });
    } else {
      pageNo = "1";
      loadPagination("1");
    }
  });

  /*----------------------------book issue user autocomplete-----------------------------*/
  $(document).ready(function () {
    var availableTags = users_list;
    $("#issue-user-search").autocomplete({
      source: availableTags,
    });

    $("#issue-user-search").keypress(function (e) {
      var location = window.location.href;
      var directoryPath = location.substring(0, location.lastIndexOf("/") + 1);

      var key = e.which;
      if (key == 13) {
        var s_user = $("#issue-user-search").val();

        result = s_user.split(".");
        var user_info =
          `
    <b>Name: </b>` +
          result[1] +
          `<br>
    <b>User Id : </b>` +
          result[0] +
          `<br>
    `;
        $("#book-issue-user-info").empty();
        $("#book-issue-user-info").append(user_info);

        var uid = result[0];
        var borrow_count;
        for (var i = 0; i < user_info.length; i++) {
          if (uid == user_info[i].user_id)
            borrow_count = user_info[i].borrow_count;
        }

        var borrowed_book;
        if (borrow_count != 0) {
          var url = directoryPath + "api/borrow";
          $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            async: true,
            success: function (data, status) {
              borrowed_book = data;

              for (var i = 0; i < borrowed_book.length; i++) {
                if (
                  uid == borrowed_book[i].user_id &&
                  book.book_id == borrowed_book[i].book_id
                ) {
                  var ret_btn = `
              <button type="button" class="btn btn-warning btn-block" id="book-return-btn">Return Book</button>
              `;
                  var issu_btn = `
              <button type="button" class="btn btn-success btn-block" id="book-issue-btn">Issue Book</button>
              `;
                  $("#issue-return-book").empty();
                  $("#issue-return-book").append(ret_btn);

                  $("#book-return-btn").on("click", function () {
                    e.preventDefault();
                    var data = {
                      book_id: parseInt(book.book_id),
                      user_id: parseInt(uid),
                    };
                    var url = directoryPath + "api/borrow/?return";
                    $.ajax({
                      url: url,
                      type: "PUT",
                      dataType: "json",
                      data: JSON.stringify(data),
                      success: function (data, textStatus, xhr) {
                        alert(textStatus);
                      },
                      error: function (xhr, textStatus, errorThrown) {
                        console.log(textStatus);
                        console.log(xhr);
                        console.log(errorThrown);
                      },
                    });

                    $("#issue-return-book").empty();
                    $("#issue-return-book").append(issu_btn);
                    $("#issue-book-modal").hide();
                  });
                  break;
                }
              }
            },
            error: function (xhr, textStatus, errorThrown) {},
          });
        }
      }
    });

    $("#book-search-dropdown").change(function () {
      if ($("#book-search-dropdown option:selected").val() === "title") {
        $("#book-search-input").attr("placeholder", "Enter book title");
      } else {
        $("#book-search-input").attr("placeholder", "Enter author name");
      }
    });

    $("#dashboard").click(function () {
      $("#inventory").css("background-color", "");
      $("#users").css("background-color", "");
      $("#history").css("background-color", "");
      $("#dashboard").css("background-color", "#2f0410");

      $("#book-details").hide();
      $("#main-body").hide();
      $("#user-list-div").hide();
      $("#history-tab-body").hide();
      $("#dashboard-body").show();

      var d = new Date();

      var month = d.getMonth() + 1;
      var day = d.getDate();

      var today =
        d.getFullYear() +
        "-" +
        (month < 10 ? "0" : "") +
        month +
        "-" +
        (day < 10 ? "0" : "") +
        day;
      /* console.log(today);*/
        
    $("#today").text(today);

      let fromDate = today;
      let toDate = today;
      loadDashboard(fromDate, toDate);

      $("#date-filter").submit(function (e) {
        e.preventDefault();

        fromDate = $("#from").val();
        toDate = $("#to").val();
          $("#today").text(fromDate+" to "+toDate);

        loadDashboard(fromDate, toDate);
        /*console.log(fromDate);
            console.log(toDate);*/
      });

      function loadDashboard(fromDate, toDate) {
        url =
          directoryPath +
          "api/dashboard/?start_date=" +
          fromDate +
          "&end_date=" +
          toDate;

        console.log(url);

        $.ajax({
          type: "GET",
          url: url,
          dataType: "json",
          async: true,
          success: function (info, status) {
            console.log(info);

            $("#num-1").text(info.total_book);
            $("#num-2").text(info.total_category);
            $("#num-3").text(info.total_issued);
            $("#num-4").text(info.total_returned);
            $("#num-5").text(info.total_overdued_books);
            $("#num-6").text(info.total_books_added);
            $("#num-7").text(info.total_user_added);

            /*total_category":"5","total_book":"48","total_issued":0,"total_returned":0,"total_books_added":"48","total_overdued_books":"50","total_user_added":0*/
          },
          error: function (info) {
            alert("fail");
            console.log(status);
          },
        });
      }
    });

    function loadPagination(page) {
      pageNo = page;
      console.log(page);
      var pageUrl =
        directoryPath + `api/books/?limit=5&offset=` + (page - 1) * 5;
      console.log(pageUrl);
      $.ajax({
        url: pageUrl,
        type: "GET",
        dataType: "json",
        async: true,
        success: function (data) {
          console.log(data);
          showBookDetails(data["message"], "#category-book-result");
        },
        /*error: function (data) {
              alert("fail");
            },*/
      });
    }
  });
  /*-----------------------------dashboard tab design---------------------------------*/
  $("#dashboard").click(function () {
    $("#inventory").css("background-color", "");
    $("#users").css("background-color", "");
    $("#history").css("background-color", "");
    $("#dashboard").css("background-color", "#2f0410");

    $("#book-details").hide();
    $("#main-body").hide();
    $("#user-list-div").hide();
    $("#history-tab-body").hide();
    $("#dashboard-body").show();
  });
  /*--------------------------------build pagination button based on data length-----------------*/
  function buildPagination(dataLength) {
    $("#pagination").empty();

    var totalPages =
      dataLength % 5 === 0
        ? parseInt(dataLength / 5)
        : parseInt(dataLength / 5 + 1);

    for (let i = 1; i <= totalPages; i++) {
      var onePage =
        `<li class="page-item"><a class="page-link" id="` +
        i +
        `">` +
        i +
        `</a></li>`;
      $("#pagination").append(onePage);
    }
  }

  /*----------------------------------load page wise book data-------------------------------------*/
  function loadPagination(page) {
    pageNo = page;
    var pageUrl =
      directoryPath +
      "api/books/?column=category_id&value=" +
      target_category_id +
      "&limit=5&offset=" +
      (page - 1) * 5;

    /*`api/books/?limit=5&offset=` + (page - 1) * 5;*/
    $.ajax({
      url: pageUrl,
      type: "GET",
      dataType: "json",
      async: true,
      success: function (data) {
        showBookDetails(data["message"], "#category-book-result");
      },
      /*error: function (data) {
        alert("fail");
      },*/
    });
  }
  /*------------------------------------pagination button click action-----------------------------------*/
  $("#card-details").on("click", ".page-link", function (ex) {
    ex.preventDefault();

    var page_id = $(this).attr("id");

    loadPagination(page_id);
  });

  /*---------------------------------history tab design-----------------------*/
  function historyTableLoad(data) {
    $("#history-tab-table-body").empty();

    var tableRow;
    for (let i = 0; i < data.length; i++) {
      tableRow =
        `<tr>
                    <td>` +
        (i + 1) +
        `</td>
                    <td>` +
        data[i].user_id +
        `</td>
                    <td>` +
        data[i].name +
        `</td>
                    <td>` +
        data[i].title +
        `</td>
                    <td class="text-info">` +
        (data[i].status === "0" ? `Issued` : `Returned`) +
        `</td>
                    <td>` +
        data[i].issue_date +
        `</td>
                    <td>` +
        data[i].due_date +
        `</td>
                  </tr>`;
      $("#history-tab-table-body").append(tableRow);
    }
  }
  /*----------------------------------history tab onclick option-------------------------------------*/
  $("#history").on("click", function () {
    $("#inventory").css("background-color", "");
    $("#users").css("background-color", "");
    $("#history").css("background-color", "#2f0410");
    $("#dashboard").css("background-color", "");

    $("#book-details").hide();
    $("#dashboard-body").hide();
    $("#main-body").hide();
    $("#user-list-div").hide();
    $("#history-tab-body").show();

    var fetchHistoryUrl = directoryPath + "api/borrow";

    $.ajax({
      type: "GET",
      url: fetchHistoryUrl,
      dataType: "json",
      async: true,
      success: function (data, status) {
        historyTableLoad(data);
      },
      error: function (data) {},
    });
  });

  /*----------------------------------history tab dropdown design-------------------------------------*/
  $("#history-search-dropdown").change(function () {
    if ($("#history-search-dropdown option:selected").val() === "title") {
      $("#history-search-input").attr("placeholder", "Enter book title");
    } else {
      $("#history-search-input").attr("placeholder", "Enter user name");
    }
  });
  /*----------------------------------history tab search design-------------------------------------*/
  $("#history-search-input").on("keyup", function () {
    var searchValue = $(this).val();

    var dataFetchUrl;
    if ($("#history-search-dropdown option:selected").val() === "title") {
      dataFetchUrl = directoryPath + "api/borrow?title=" + searchValue;
    } else {
      dataFetchUrl = directoryPath + "api/borrow?name=" + searchValue;
    }

    $.ajax({
      type: "GET",
      url: dataFetchUrl,
      dataType: "json",
      async: true,
      success: function (data, status) {
        historyTableLoad(data);
      },
      error: function (data, status) {},
    });
  });
  historyFunction = historyTableLoad;

  var user_list;
  /*----------------------------------users tab click design-------------------------------------*/
  $("#users").click(function () {
    $("#inventory").css("background-color", "");
    $("#users").css("background-color", "#2f0410");
    $("#history").css("background-color", "");
    $("#dashboard").css("background-color", "");

    $("#book-details").hide();
    $("#history-tab-body").hide();
    $("#dashboard-body").hide();
    $("#main-body").hide();
    $("#user-list-div").show();

    $.ajax({
      type: "GET",
      url: directoryPath + `api/users/`,
      dataType: "json",
      async: true,
      success: function (data, status) {
        user_list = data["message"];
        show_user_list(user_list);
      },
    });
  });

  /*----------------------------------user list show table-------------------------------------*/
  function show_user_list(user_list) {
    console.log("dhukse.................");
    $("#user-list-table-body").empty();

    for (let i = 0; i < user_list.length; i++) {
      var userTableRows =
        `
        <tr>
            <th scope="row">` +
        (i + 1) +
        `</th>
            <td class="text-center">` +
        user_list[i].user_id +
        `</td>
            <td>` +
        user_list[i].name +
        `</td>
            <td>` +
        user_list[i].email +
        `</td>
            <td>` +
        user_list[i].contact_no +
        `</td>
            <td>
                <div class="float-center">            
                    <button type="button" class="btn btn-primary badge-pill user-edit-button" style="width: 80px;"id="` +
        user_list[i].user_id +
        `">Edit</button>
                    <button type="button" class="btn btn-danger badge-pill user-remove-button" style="width: 80px;" id="` +
        user_list[i].user_id +
        `">Remove</button>
                </div>
            </td>
        </tr>
      `;

      $("#user-list-table-body").append(userTableRows);
    }
  }

  var uid;
  /*----------------------------------user edit option-------------------------------------*/
  $("#user-list-table").on("click", ".user-edit-button", function (e) {
    uid = $(this).attr("id");
    var uname, phn, email;
    for (var i = 0; i < user_list.length; i++) {
      if (user_list[i].user_id == uid) {
        uname = user_list[i].name;
        phn = user_list[i].contact_no;
        email = user_list[i].email;
        break;
      }
    }

    $("#edit-user-modal").show();

    $("#user-name").attr("value", uname);
    $("#phone-no").attr("value", phn);
    $("#email-id").attr("value", email);
  });
  /*-----------------------------------user form edit------------------------------------*/
  $("#edit-user-form").submit(function (e) {
    e.preventDefault();
    let data = {
      name: "",
      email: "",
      contact_no: "",
      image_path: "",
    };
    var url = directoryPath + "api/users/" + uid;
    data.name = $("#user-name").val();
    data.email = $("#email-id").val();
    data.contact_no = $("#phone-no").val();
    data.image_path = "";

    $.ajax({
      url: url,
      type: "PUT",
      dataType: "json",
      data: JSON.stringify(data),
      success: function (data, textStatus, xhr) {},
      error: function (xhr, textStatus, errorThrown) {},
    });
    $("#edit-user-modal").hide();
  });
  /*----------------------------------user remove design-------------------------------------*/
  $("#user-list-table").on("click", ".user-remove-button", function (e) {
    uid = $(this).attr("id");
    var uname, borrowed_books;
    for (var i = 0; i < user_list.length; i++) {
      if (user_list[i].user_id == uid) {
        borrowed_books = user_list[i].borrow_count;
        uname = user_list[i].name;
        break;
      }
    }

    if (
      borrowed_books == 0 &&
      confirm(`Remove ` + uname + ` permenantly from database?`)
    ) {
      var url = directoryPath + "api/users/" + uid;
      var ajxReq = $.ajax(url, {
        type: "DELETE",
      });
      ajxReq.success(function (data, status, jqXhr) {
        console.log("deleted");
      });
      ajxReq.error(function (jqXhr, textStatus, errorMessage) {
        console.log("delete faild");
      });

      $.ajax({
        type: "GET",
        url: directoryPath + `api/users/`,
        dataType: "json",
        async: true,
        success: function (data, status) {
          var updated_user_list = data["message"];
          console.log(updated_user_list);
          show_user_list(updated_user_list);
        },
      });
    } else if (borrowed_books == 1)
      alert(
        uname +
          ` has ` +
          borrowed_books +
          ` borrowed book.\nCan,t remove before returning the book.`
      );
    else if (borrowed_books >= 1)
      alert(
        uname +
          ` has ` +
          borrowed_books +
          ` borrowed books.\nCan,t remove before returning these books.`
      );
  });
  /*-----------------------------------global search input design------------------------------------*/
  $("#global-search-input").on("keyup", function () {
    console.log($(this).val());
    globalSearchValue = $(this).val();
    if (globalSearchValue.length > 0) {
      var fetchGlobalUrl =
        directoryPath + "api/books/?value=" + globalSearchValue;
      console.log(fetchGlobalUrl);
      $.ajax({
        type: "GET",
        url: fetchGlobalUrl,
        dataType: "json",
        async: true,
        success: function (data, status) {
          console.log(data);
          output = data["message"];
          showBookDetails(data["message"], "#global-result-tbody");
          $("#book-category-div").hide();
          $("#global-search-result-table").show();
        },
        error: function (data, status) {},
      });
    } else {
      $("#global-search-result-table").hide();
      $("#book-category-div").show();
    }
  });
  $("#loading-animation").hide();
});
