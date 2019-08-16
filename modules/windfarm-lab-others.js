(function(){
    var modules={
        "panel-main-windfarm-lab":    	{url:"$A/modules/p/panel-windfarm-lab/panel-main.html",router:1},
        "panel-child-windfarm-lab":    	{url:"$A/modules/p/panel-windfarm-lab/panel-child.html"},
        "panel-reports-windfarm-lab":   {url:"$A/modules/p/panel-windfarm-lab/panel-reports.html"},
        "panel-neurotology-windfarm-lab":{url:"$A/modules/p/panel-windfarm-lab/panel-neurotology.html"},
        "participant-data-windfarm-lab":{url:"$A/modules/p/participant-data-windfarm-lab.html",Table:"20008848",form_module:"participant-form-windfarm-lab",router:1,child_panel:"panel-child-windfarm-lab",questionnaire_setup:"online-questionnaire-setup-windfarm-lab", online_questionnaire:"online-questionnaire-app-windfarm-lab"},
        "participant-form-windfarm-lab":{url:"$A/modules/p/participant-form-windfarm-lab.html",Table:"20008848"},
        "todolist": { url: "$A/modules/t/todolist-data.html", Table:"91000782",form_module:"todolist-form"},
        "todolist-form": {url: "$A/modules/t/todolist-form.html",Table:"91000782"},
        "edc-notes-data":  		  		    {url:"$A/modules/e/edc-notes-data.html",Table:"20008850",form_module:"edc-notes-form"},
        "edc-notes-form":  		  	    	{url:"$A/modules/e/edc-notes-form.html",Table:"20008850"},
        "online-questionnaire-setup-windfarm-lab": 	{url:"$A/modules/o/online-questionnaire-setup-windfarm-lab.html",Table:"20009295"},


        "panel-permission":   			    {url:"$A/modules/p/permission/permission-panel.html",router:1},
        "permission-check":                 {url:"$A/modules/p/permission/permission-check.html"},
        "permission-role-login-data":       {url:"$A/modules/p/permission/permission-role-login-data.html",Table:"91000620",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$A/modules/p/permission/permission-role-login-form.html",Table:"91000620"},
        "permission-role-table-group-data": {url:"$A/modules/p/permission/permission-role-table-group-data.html",Table:"91000619",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$A/modules/p/permission/permission-role-table-group-form.html",Table:"91000619"},
        "permission-query-data":            {url:"$A/modules/p/permission/permission-query-data.html",Table:"91000618",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$A/modules/p/permission/permission-query-form.html",Table:"91000618"},

    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
