<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Survey extends CI_Controller {
    
    public function __construct () {
        parent::__construct();
    }
    
    public function submitresponse () {
        
        $data=json_decode(file_get_contents("php://input"));
        $user=$data->user;
        $response=$data->response;
        
        for ($i=0;$i=count($response);$i++) {
            $responseinfo=array (
                "student"=>$user
                );
        }
       
       $this->db->insert('responses',$responseinfo);
        
    }
    
}