<?php

use function PHPSTORM_META\type;

if (!defined('__ROOT__')) define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__ . '/Model/Dashboard.php');

class DashboardController
{
    private $db = null;
    private $requestMethod;
    private $queryParams;
    private $dashboard;
    function __construct($dbConnector, $method, $queryString)
    {
        $this->db = $dbConnector;
        $this->requestMethod = $method;
        parse_str($queryString, $this->queryParams);
        $this->dashboard = new Dashboard($this->db);
    }

    function selectMethod()
    {
        if ($this->requestMethod == 'GET') {
            $this->get_data();
        }
    }

    public function get_data()
    {
        $total_category = $this->readCount();
        $total_book = $this->dashboard->countBook()[0]['COUNT(book_id)'];
        $rni = $this->dashboard->totalBorrowedReturned($this->queryParams['start_date'], $this->queryParams['end_date']);
        $ti = 0;
        if (isset($rni[0]['COUNT(status)'])) $ti = $rni[0]['COUNT(status)'];
        $tr = 0;
        if (isset($rni[0]['COUNT(status)'])) $tr = $rni[1]['COUNT(status)'];

        $tba = $this->dashboard->totalBooksAdded($this->queryParams['start_date'], $this->queryParams['end_date']);
        $tb = 0;
        if (isset($tba[0]['COUNT(book_id)'])) $tb = $tba[0]['COUNT(book_id)'];

        $tdb = $this->dashboard->totalOverduedBooks($this->queryParams['start_date'], $this->queryParams['end_date']);
        $td = 0;
        if (isset($tdb[0]['COUNT(due_date)'])) $td = $tdb[0]['COUNT(due_date)'];

        $tua = $this->dashboard->totalUserAdded($this->queryParams['start_date'], $this->queryParams['end_date']);
        $tu = 0;
        if (isset($tua[0]['COUNT(user_id)'])) $tu = $tua[0]['COUNT(user_id)'];

        $result = array(
            "total_category" => $total_category,
            "total_book" => $total_book,
            "total_issued" => $ti,
            "total_returned" => $tr,
            "total_books_added" => $tb,
            "total_overdued_books" => $td,
            "total_user_added" => $tu
        );
        echo json_encode($result);
    }


    public function readCount()
    {
        $stmt = $this->dashboard->countCategory();
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        if ($result) {
            return $result[0]['COUNT(category_id)'];
        } else {
            echo json_encode(
                array('message' => 'No book issue history found')
            );
        }
        $stmt = $this->dashboard->countBook();
        $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);

        if ($result) {
            echo json_encode($result);
        } else {
            echo json_encode(
                array('message' => 'No book issue history found')
            );
        }
    }
}