// import { useState } from "react";
// import logo from '../assets/loginpageimage.png';
import "../styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Form } from "react-bootstrap";


const LoginForm = () => {

  function tooltipShow5813716000000450005(el) {
    var tooltip = el.nextElementSibling;
    var tooltipDisplay = tooltip.style.display;
    if (tooltipDisplay == 'none') {
      var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
      for (let i = 0; i < allTooltip.length; i++) {
        allTooltip[i].style.display = 'none';
      }
      tooltip.style.display = 'block';
    } else {
      tooltip.style.display = 'none';
    }
  }

  // function checkMandatory5813716000000450005() {
  //   var mndFileds = new Array('Company', 'Last Name');
  //   var fldLangVal = new Array('Company', 'Last\x20Name');
  //   for (let i = 0; i < mndFileds.length; i++) {
  //     var fieldObj = document.forms['WebToLeads5813716000000450005'][mndFileds[i]];
  //     if (fieldObj) {
  //       if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
  //         if (fieldObj.type == 'file') {
  //           alert('Please select a file to upload.');
  //           fieldObj.focus();
  //           return false;
  //         }
  //         alert(fldLangVal[i] + ' cannot be empty.');
  //         fieldObj.focus();
  //         return false;
  //       } else if (fieldObj.nodeName == 'SELECT') {
  //         if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
  //           alert(fldLangVal[i] + ' cannot be none.');
  //           fieldObj.focus();
  //           return false;
  //         }
  //       } else if (fieldObj.type == 'checkbox') {
  //         if (fieldObj.checked == false) {
  //           alert('Please accept  ' + fldLangVal[i]);
  //           fieldObj.focus();
  //           return false;
  //         }
  //       }
  //       try {
  //         if (fieldObj.name == 'Last Name') {
  //           name = fieldObj.value;
  //         }
  //       } catch (e) { }
  //     }
  //   }
  //   if (!validateEmail5813716000000450005()) { return false; }
  //   document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
  // }

  function validateEmail5813716000000450005() {
    // var form = document.forms['WebToLeads5813716000000450005'];
    // var emailFld = form.querySelectorAll('[ftype=email]');
    // var i;
    // for (i = 0; i < emailFld.length; i++) {
    //   var emailVal = emailFld[i].value;
    //   if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
    //     var atpos = emailVal.indexOf('@');
    //     var dotpos = emailVal.lastIndexOf('.');
    //     if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
    //       alert('Please enter a valid email address. ');
    //       emailFld[i].focus();
    //       return false;
    //     }
    //   }
    // }
    return true;
  }

  const handleSubmit = async (e) => {
    console.log("handling submit..", e);

    e.preventDefault();
  }

  return (

    <div id='crmWebToEntityForm' className='zcwf_lblTopBottom crmWebToEntityForm' style='background-color: white;color: black;max-width: 900px;'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      {/* <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8' /> */}
      <form action='https://crm.zoho.com/crm/WebToLeadForm' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5813716000000450005()' accept-charset='UTF-8'>
        <input type='text' style='display:none;' name='xnQsjsdp' value='fbd9ac9ef083d47d156e2b601ccf851b002f8770fc457789a46bb8163f949f31'></input>
        <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
        <input type='text' style='display:none;' name='xmIwtLD' value='261ecd957ff9ba152b8b186a9bd4728895298b3fb3b654458c494237be5ca692'></input>
        <input type='text' style='display:none;' name='actionType' value='TGVhZHM='></input>
        <input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;www.ansoftt.com&#x2f;' > </input>


        <div className='zcwf_title' style='max-width: 900px;color: black; font-family:Arial;'>Get in touch</div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='First_Name'>First Name</label></div><div className='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40'></input><div className='zcwf_col_help'> <span title='First Name' style='cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #c0c6cc; color: #c1c1c1; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%;' onclick='tooltipShow5813716000000450005(this)'>?</span><div className='zcwf_tooltip_over' style='display: none;'><span className='zcwf_tooltip_ctn'>First Name</span></div></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Last_Name'>Last Name<span style='color:red;'>*</span></label></div><div className='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Email'>Email</label></div><div className='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Mobile'>Mobile</label></div><div className='zcwf_col_fld'><input type='text' id='Mobile' name='Mobile' maxlength='30'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Company'>Company<span style='color:red;'>*</span></label></div><div className='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Designation'>Title</label></div><div className='zcwf_col_fld'><input type='text' id='Designation' name='Designation' maxlength='100'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='City'>City</label></div><div className='zcwf_col_fld'><input type='text' id='City' name='City' maxlength='100'></input><div className='zcwf_col_help'></div></div></div>
        <div className='zcwf_row'><div className='zcwf_col_lab' style='font-size:12px; font-family: Arial;'><label for='Description'>Description</label></div><div className='zcwf_col_fld'><textarea id='Description' name='Description'></textarea><div className='zcwf_col_help'></div></div></div><div className='zcwf_row'><div className='zcwf_col_lab'></div><div className='zcwf_col_fld'><input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit' onClick={handleSubmit} /><input type='reset' className='zcwf_button' name='reset' value='Reset' title='Reset'></input></div></div>

      </form>
    </div>


  );
}

export default LoginForm;