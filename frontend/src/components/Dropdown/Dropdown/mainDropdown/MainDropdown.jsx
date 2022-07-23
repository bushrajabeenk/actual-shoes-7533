import React from 'react'
import { useState } from 'react'
import Accounting from '../dropSubComponents/Accounting'
import Clients from '../dropSubComponents/Clients'
import Contracts from '../dropSubComponents/Contracts'
import Forms from '../dropSubComponents/Forms'
import Invoices from '../dropSubComponents/Invoices'
import Proposals from '../dropSubComponents/Proposals'
import Task from '../dropSubComponents/Task'
import Time from '../dropSubComponents/Time'
import "./maindropdown.css"

const MainDropdown = () => {

    const [proposal, setProposal] = useState(true)
    const [contract, setContract] = useState(false) 
    const [clients, setClients] = useState(false) 
    const [time, setTime] = useState(false) 
    const [invoices, setInvoices] = useState(false) 
    const [task, setTask] = useState(false)
    const [accounting, setAccounting]= useState(false)
    const [forms, setForms] = useState(false) ;
    const handleProposal = () => {
        setProposal(true)
        setContract(false)
        setClients(false)
        setTime(false)
        setInvoices(false)
        setTask(false)
        setAccounting(false)
        setForms(false)
    }
    const handleContractsl = () => {
        setProposal(false)
        setContract(true)
        setClients(false)
        setTime(false)
        setInvoices(false)
        setTask(false)
        setAccounting(false)
        setForms(false)

    }
    const handleClients = () => {
        setProposal(false)
        setContract(false)
        setClients(true)
        setTime(false)
        setInvoices(false)
        setTask(false)
        setAccounting(false)
        setForms(false)
    }
    const handleTime = () => {
        setProposal(false)
        setContract(false)
        setClients(false)
        setTime(true)
        setInvoices(false)
        setTask(false)
        setAccounting(false)
        setForms(false)
    }
    const handleInvoices = () => {
        setProposal(false)
        setContract(false)
        setClients(false)
        setTime(false)
        setInvoices(true)
        setTask(false)
        setAccounting(false)
        setForms(false)
    }
    const handleTask = () => {
        setProposal(false)
        setContract(false)
        setClients(false)
        setTime(false)
        setInvoices(false)
        setTask(true)
        setAccounting(false)
        setForms(false)
    }
    const handleAccounting = () => {
        setProposal(false)
        setContract(false)
        setClients(false)
        setTime(false)
        setInvoices(false)
        setTask(false)
        setAccounting(true)
        setForms(false)
    }
    const handleForms = () => {
        setProposal(false)
        setContract(false)
        setClients(false)
        setTime(false)
        setInvoices(false)
        setTask(false)
        setAccounting(false)
        setForms(true)
    }
  return (
    <>
    <div className='mainDropDownContainer'>
        <div className='leftDivDropdown'>
            <div onClick={handleProposal} style={{backgroundColor : proposal ? "#00B289":""}}><img src="https://c8.alamy.com/comp/2B37CXF/document-icon-template-black-color-editable-document-icon-symbol-flat-vector-illustration-for-graphic-and-web-design-2B37CXF.jpg" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Proposals</b></div>
            <hr/>
          <div onClick={handleContractsl} style={{backgroundColor : contract ? "#00B289":""}}><img src="https://static.thenounproject.com/png/1021192-200.png" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Contracts</b></div>
          <hr/>
          <div onClick={handleClients} style={{backgroundColor : clients ? "#00B289":""}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ru6M8BABzQdwkHA5Ooo4Hr6Qfz6X0r4Rb9E1n5VUofbYz6wAClbyHSmJXHq8Ncm7t1Q&usqp=CAU" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Client CRM</b></div>
          <hr/>
          <div onClick={handleTime} style={{backgroundColor : time ? "#00B289":""}}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Globe_icon_%28the_Noun_Project_30701%29.svg/1200px-Globe_icon_%28the_Noun_Project_30701%29.svg.png" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Time Tracking</b></div>
          <hr/>
          <div onClick={handleInvoices} style={{backgroundColor : invoices ? "#00B289":""}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcFytkcl-QRb1n5gxbA2jujmLhLJj9zyBonaCH76ht5rwhwaWMQpmeTXG-4_sGVPkJqg&usqp=CAU" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Invoices</b></div>
          <hr/>
          <div onClick={handleTask} style={{backgroundColor : task ? "#00B289":""}}><img src="https://static.thenounproject.com/png/1021192-200.png" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Task Tracking</b></div>
          <hr/>
          <div onClick={handleAccounting} style={{backgroundColor : accounting ? "#00B289":""}}><img src="https://c8.alamy.com/comp/2B37CXF/document-icon-template-black-color-editable-document-icon-symbol-flat-vector-illustration-for-graphic-and-web-design-2B37CXF.jpg" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Accounting and taxes</b></div>
          <hr/>
          <div onClick={handleForms} style={{backgroundColor : forms ? "#00B289":""}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcFytkcl-QRb1n5gxbA2jujmLhLJj9zyBonaCH76ht5rwhwaWMQpmeTXG-4_sGVPkJqg&usqp=CAU" alt="" width="30" height="30"/><b style={{paddingLeft:"20px"}}>Forms</b></div>
          <hr/>

        </div>
        <div className='rightDivDropdown'>
            
          {
            proposal ? <Proposals/> : contract ? <Contracts/> : clients ? <Clients/> : time ? <Time/> : invoices ? <Invoices/> : task ? <Task/> : accounting ? <Accounting/> : <Forms/>
          }

        </div>

    </div>
    </>
    
  )
}

export default MainDropdown
