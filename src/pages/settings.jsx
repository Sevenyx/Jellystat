import React from "react";
import {Tabs, Tab } from 'react-bootstrap';

import SettingsConfig from "./components/settings/settingsConfig";
import Tasks from "./components/settings/Tasks";
import BackupFiles from "./components/settings/backupfiles";
import SecuritySettings from "./components/settings/security";
import ApiKeys from "./components/settings/apiKeys";

import Logs from "./components/settings/logs";




import "./css/settings/settings.css";

export default function Settings() {


  return (
    <div className="settings my-2">
    <Tabs defaultActiveKey="tabGeneral"  variant='pills'>

          <Tab eventKey="tabGeneral" className='bg-transparent my-2' title='Settings'  style={{minHeight:'500px'}}>
           <SettingsConfig/>
           <SecuritySettings/>
           <Tasks/>
          </Tab>

          <Tab eventKey="tabLibraries" className='bg-transparent  my-2' title='Library Settings'  style={{minHeight:'500px'}}>
          <LibrarySelector/>
          </Tab>

          <Tab eventKey="tabKeys" className='bg-transparent  my-2' title='API Keys'  style={{minHeight:'500px'}}>
          <ApiKeys/>
          </Tab>

          <Tab eventKey="tabBackup" className='bg-transparent  my-2' title='Backup'  style={{minHeight:'500px'}}>
          <BackupFiles/>
          </Tab>

          <Tab eventKey="tabLogs" className='bg-transparent  my-2' title='Logs'  style={{minHeight:'500px'}}>
          <Logs/>
          </Tab>



          
    </Tabs>
    
    {/* <TerminalComponent/> */}
    
    </div>
  );
}
