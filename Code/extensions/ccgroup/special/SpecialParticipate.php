<?php

include ( '../conf.php');

class SpecialParticipate extends SpecialPage {

        public function __construct() {
                parent::__construct( 'Participate' );
        }

        public function execute( $par ) {
                global $wgOut , $wgRequest;

                $this->setHeaders();
                
		$this->page_name = $wgRequest->getText( 'page_name' );

		$wgOut->addHTML( $this->makeForm( $this->page_name) );

         }

        private function makeForm( $page_name ) {
		global $ccHost, $ccPort, $ccSite;

                $title = self::getTitleFor( 'Participate' );
                $form  = '<fieldset><legend>' . wfMsgHtml( 'Participate' ) . '</legend>';

		$form .= '<div>
                        <h3>Page name: ' .$page_name. '</h3></div>';
                $form .= '<form id="form1" name="form1" method="post" action="' .'http://' .$ccHost. ':' .$ccPort. '/' .$ccSite. '/extensions/ccgroup/special/participatorSave.php'. '" enctype="multipart/form-data">';
		$form .= '<input type="hidden" name="page_name" value="' .$page_name. '" /><br />';
		$form .= '<p> Action <input type="text" name="name" />';
                $form .= '<p> Email <input type="text" name="email" />';
                $form .= '<p> Photo <input type="file" name="photo"/>';
                $form .= '<br /><br />' . Xml::submitButton( 'Participate' ) . '</p>';
                $form .= '</form>';
                $form .= '</fieldset>';

                 return $form;
        } 
}
?>
