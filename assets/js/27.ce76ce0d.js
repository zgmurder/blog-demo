(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{536:function(t,e,n){"use strict";n.r(e);var a={data:function(){return{tableData:{column:[{type:"index",align:"center"},{prop:"date",label:"日期"},{prop:"name",label:"姓名"},{prop:"address",label:"地址"}],data:[{date:"2016-05-02",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎2",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎3",address:"上海市普陀区金沙江路 1518 弄"}]},currentRow:null}},methods:{setCurrent:function(t){this.$refs.lbTable.setCurrentRow(t)},handleCurrentChange:function(t){this.currentRow=t}}},r=n(1),l=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("zg-table",{ref:"lbTable",attrs:{"highlight-current-row":"",column:t.tableData.column,data:t.tableData.data},on:{"current-change":t.handleCurrentChange}}),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{on:{click:function(e){return t.setCurrent(t.tableData.data[1])}}},[t._v("选中第二行")]),t._v(" "),n("el-button",{on:{click:function(e){return t.setCurrent()}}},[t._v("取消选择")])],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);