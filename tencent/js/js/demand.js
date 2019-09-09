import { myPutAjax_415 } from "../Component/ajax.js";

$(function(){
    var role = sessionStorage.role
     if(role == 0){     
    myPutAjax_415('post',"builder/browsing_history_demand/",{demand_id:sessionStorage.build},builder)
    function builder(res){
        data_1(res[0].data.demand)    
        $('#head').load('../pages/head.html');
        $('#footer').load('../pages/footer.html');
        $('.collect').click(function () {
            myPutAjax_415('put', 'builder/demand_collect_state/', { demand_id: sessionStorage.build }, workman)
            function workman(res) {
                alert('收藏成功')
            }
        })
        $('.apply').click(function () {
            //申请
            myPutAjax_415('put', 'builder/demand_apply_state/', { demand_id: sessionStorage.build }, workman)
            function workman(res) {
                console.log(res)
                if(res[0].code == 603){
                    alert('信息不存在') 
                }
                else if(res[0].code == 200){
                    alert('申请成功')
                }
                
            }
        })
        }
      
    }
    else if(role == 1 || role ==2){
        myPutAjax_415('post', 'developers/builder_browsing_history_demand/', { demand_id: sessionStorage.build }, workman)
        function workman(res) {
            data_2(res[0].data.demand) 
            $('#head').load('../pages/head.html');
            $('#footer').load('../pages/footer.html');
        }

    }
    else if(!role){
        alert('请登录')
    }
})

function data_1(data_1){
    console.log(data_1)
     var str_1 = ` 
     <div id="head"></div>

      <div class="resume-bg"> 
      <div class="resume-details"> 
       <div class="resume-tit"> 
        <span>需求信息</span> 
        <div class="resume-bor"></div> 
       </div> 
       <div class="resume-name"> 
        <div class="resume-block layout"> 
         <span>公司名称：${data_1.company}</span> 
         <span>需求信息：${data_1.demand_job}</span> 
         <span>需求人数：${data_1.demand_num}</span> 
        </div> 
        <div class="resume-block layout"> 
         <span>薪资：${data_1.jobs_salary}</span> 
         <span>项目计划：${data_1.project_profile}</span> 
        </div> 
        <div class="resume-none layout" style = 'display:block'> 
         <span>项目状态：${data_1.project_state_name}</span> 
         <span>工程：${data_1.project_type}</span> 
        </div> 
        <div class="resume-btn"> 
        <input type="button" value="申请" class='apply'/> 
        <input type="button" value="收藏" class='collect'/> 
        <input type="button" value="取消收藏" style="display: none;" /> 
       </div> 
       </div> 
      </div> 
     </div> 
     
     <div id="footer"></div>
        `
    console.log( $('#head')[0])
    $('body').html(str_1);
}


function data_2(data_1){
    console.log(data_1)
     var str_1 = ` 
     <div id="head"></div>

      <div class="resume-bg"> 
      <div class="resume-details"> 
       <div class="resume-tit"> 
        <span>需求信息</span> 
        <div class="resume-bor"></div> 
       </div> 
       <div class="resume-name"> 
        <div class="resume-block layout"> 
         <span>公司名称：${data_1.company}</span> 
         <span>证书：${data_1.building_certificate}</span> 
        </div> 
        <div class="resume-block layout"> 
         <span>项目名称：${data_1.project_name}</span> 
         <span>项目计划：${data_1.project_type}</span> 
        </div> 
        <div class="resume-none layout" style = 'display:block'> 
         <span>金额：${data_1.contract_amount}</span> 
        </div> 
        <div class="resume-btn"> 
        <input type="button" value="申请" class='apply'/> 
        <input type="button" value="收藏" class='collect'/> 
        <input type="button" value="取消收藏" style="display: none;" /> 
       </div> 
       </div> 
      </div> 
     </div> 
     
     <div id="footer"></div>
        `
    console.log( $('#head')[0])
    $('body').html(str_1);
}