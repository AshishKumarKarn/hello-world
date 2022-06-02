import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { EmpserviceService } from '../services/empservice.service';
import * as pdfJSLib from 'pdfjs-dist';
import { GetViewportParameters, PDFDocumentProxy, RenderParameters } from 'pdfjs-dist/types/src/display/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private pdfworkersrcCDN:string;
  constructor(private _empService:EmpserviceService) { 
    //you might want to inject this url through some config service 
    this.pdfworkersrcCDN = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js'
  }

  ngOnInit(): void {
    this.empDataResp = this._empService.getEmployeeNames().subscribe((data)=>
    {this.empDataResp = data
    },
    error=>this.errorMsg=error);
    
    pdfJSLib.GlobalWorkerOptions.workerSrc = this.pdfworkersrcCDN;
    
  }
  private empDataResp:any;
  private errorMsg:any;
  public name = 'Ashish Karn';
  public someValue = 'Ashish';

  pdfState = {
    pdf: <PDFDocumentProxy><unknown>null,
    currentPage: 1,
    zoom: 1.5
  }
  

  getGreeting(){
    return 'Welcome';
  }

  loadPDF(){
    let url = 'https://india.oup.com/productPage/5591038/7421214/9780198062271';
    this.loadPDFWithUrl(url);
  }
   loadPDFWithUrl(url:any){
     pdfJSLib.getDocument(url).promise.then(doc=>{
      console.log("This file has "+doc._pdfInfo.numPages+" pages");     
     this.pdfState.pdf = doc;
    this.render();
    })
  }

  render=()=>{
    this.pdfState.pdf.getPage(this.pdfState.currentPage).then((page)=>{
      console.log('rendering..');
      
      let myCanvas = <HTMLCanvasElement>document.getElementById("myCanvas");
      var ctx = myCanvas.getContext("2d");
      // { scale, rotation, offsetX, offsetY, dontFlip, }?: GetViewportParameters
      let viewParams={scale:2};
      let viewPort = page.getViewport(viewParams);
      myCanvas.width = viewPort.width;
      myCanvas.height = viewPort.height;
      let renderParams =<RenderParameters> { canvasContext: ctx,
        viewport: viewPort}; 
      page.render(renderParams);
      console.log('rendered');
      

    })

  }
  public disabledByComponent = false;

  public isSpecial = true;
  public hasError = false;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  onClicking(event:any){
    console.log('Hey!! you clicked me!! :) ')
    console.log(event);
  }
  logData(event:any,inputData:any){
    
    console.log(event.target.value);
    console.log(inputData);
    console.log(this.errorMsg)
    console.log(this.empDataResp.data);
    
  }
}
