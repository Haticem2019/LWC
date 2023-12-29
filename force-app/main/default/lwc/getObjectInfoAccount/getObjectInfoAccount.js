import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
export default class GetObjectInfoAccount extends LightningElement {
   //Step-1: start with your wire services. Type wire ans select the wire from the given options to import the wire decorator.
   //Step-2:Go ehead and write your adapter that you are going to use inide of wire`s parentheses.
   //Step-3: Check out the configuration of this adapter.
   rtId;
   apiName;
  VendorRtId;
  CustomerRtId;
  MasterRtId;
 
   @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
   accountInfo({data,error}){
    if(data){
        console.log(data);
        
   this.rtId=data.defaultRecordTypeId;
   this.apiName=data.apiName;

    const recordTypesMap =data.recordTypeInfos;
    console.log(recordTypesMap);
    this.VendorRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Vendor');
    this.CustomerRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Customer');
    this.MasterRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Master');
   
      }
     
    }

      if(error){
        console.log(error);
      }
   }