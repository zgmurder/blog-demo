(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{518:function(a,e,t){"use strict";t.r(e);var n={data:function(){return{tableData:{column:[{prop:"date",label:"日期"},{prop:"name",label:"姓名"},{prop:"address",label:"地址"}],data:[]},loading:!1,currentPage:1,pageSize:5}},created:function(){this.createData(this.pageSize)},methods:{createData:function(a){var e=this;this.loading=!0;for(var t=[],n=0;n<a;n++)t.push({date:"2016-05-02",name:"王小虎-".concat(this.currentPage,"-").concat(n+1),address:"上海市普陀区金沙江路 -".concat(this.currentPage,"-").concat(n+1," 弄")});setTimeout((function(){e.tableData.data=t,e.loading=!1}),1e3)},handleSizeChange:function(a){this.currentPage=1,this.pageSize=a,this.createData(this.pageSize)},handleCurrentChange:function(){this.createData(this.pageSize)}}},r=t(1),i=Object(r.a)(n,(function(){var a=this,e=a.$createElement;return(a._self._c||e)("zg-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],attrs:{column:a.tableData.column,data:a.tableData.data,pagination:"",background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[5,10,20,30],"pager-count":5,"current-page":a.currentPage,total:100,"page-size":a.pageSize},on:{"update:currentPage":function(e){a.currentPage=e},"update:current-page":function(e){a.currentPage=e},"size-change":a.handleSizeChange,"p-current-change":a.handleCurrentChange}})}),[],!1,null,null,null);e.default=i.exports}}]);