var tblDisciplineFirstOne;
var tblNavItemFirstOne;
var tableDisciplines2;
var tableNavBarItems;
var tableResearchPlan;
var tableRoles;
var tableRoles2;
var tableUsers;
var tableParents;
var tableChildren;
var opslag_gekoppelde_discipline;
var tblNavItems;
var tblViews;

$(document).ready( function () {
    
    $(document).on('click','.rowDisciplineFirstOne',function(){
        $('.rowDisciplineFirstOne').removeClass("selected");
        $('.rowNavItemFirstOne').removeClass("selected");
        $(this).addClass("selected");
    });

    var height = getHeight();

    function getHeight() {
        var cardBodyHeight = $("#FirstCardBody").height();
        var tableHeight = cardBodyHeight - 100;
      
        return tableHeight;
    }
    
    tblDisciplineFirstOne = $('#tblDisciplineFirstOne').DataTable({
        autoWidth: false,
        retrieve: true,
        info: false,
		scrollY: height,
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
        dom: 'Bfrtip',
        buttons: {
            buttons: [
                {
                    text: '<span class="material-icons-outlined pb-0">add</span>',
                    action: function ( e, dt, node, config ) {
                        $("#DisciplineToevoegenModal").modal('show');
                    },
                    className: 'btn btn-primary btn-sm p-0',
                },
                {
                    text: '<span class="material-icons-outlined pb-0">delete</span>',
                    action: function ( e, dt, node, config ) {
                        $("#DisciplineVerwijderenModal").modal('show');
                    },
                    className: 'btn btn-danger btn-sm p-0',
                }
            ],
            dom: {
                button: {
                tag: "button",
                className: "btn btn-primary btn-sm p-0",
                },
            },
        },
        
    });

    tblNavItemFirstOne = $('#tblNavItemFirstOne').DataTable({
        autoWidth: false,
        retrieve: true,
        info: false,
		scrollY: height,
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
        dom: 'Bfrtip',
        buttons:{
            buttons: [
                {
                    text: '<span class="material-icons-outlined pb-0">add</span>',
                    action: function ( e, dt, node, config ) {
                        $("#NavItemToevoegenModal").modal('show');
                            var selectedRow = document.getElementsByClassName('d-flex rowDisciplineFirstOne odd selected');
                            var selectedRow1 = document.getElementsByClassName('d-flex rowDisciplineFirstOne even selected');

                            if(selectedRow.length == 0){}
                            if(selectedRow1.length == 0){}
                            if(selectedRow.length !== 0){document.getElementById('disciplineName').value = selectedRow[0].attributes[2].value;}
                            if(selectedRow1.length !== 0){document.getElementById('disciplineName').value = selectedRow1[0].attributes[2].value;}
                    },
                    className: 'btn btn-primary btn-sm p-0',
                },
                {
                    text: '<span class="material-icons-outlined pb-0">delete</span>',
                    action: function ( e, dt, node, config ) {
                        $("#NavItemVerwijderenModal").modal('show');
                    },
                    className: 'btn btn-danger btn-sm p-0',
                }
            ],
            dom: {
                button: {
                  tag: "button",
                  className: "btn btn-primary btn-sm p-0",
                },
            },
        },
        fnDrawCallback : function() {
            tblDisciplineFirstOne.columns.adjust();

        }
    });

    $('#table3').DataTable({
        retrieve: true,
        "autoWidth": false,
        scrollY: "500px",
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
    });

    $('#tblDisciplineToDelete').DataTable({
        retrieve: true,
        "autoWidth": false,
        scrollY: "500px",
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
    });

    $('#tblDisciplineToDelete2').DataTable({
        retrieve: true,
        "autoWidth": false,
        scrollY: "500px",
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
    });

    $('#tblRoleToDelete').DataTable({
        retrieve: true,
        "autoWidth": false,
        scrollY: "500px",
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
    });

    $('#tblRoleToDelete2').DataTable({
        retrieve: true,
        "autoWidth": false,
        scrollY: "500px",
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
    });

    $('#tblUserToDelete').DataTable({
        retrieve: true,
        "autoWidth": false,
        scrollY: "500px",
        scrollX: false,
		scrollCollapse: true,
		scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: APP_URL + "Libs/DatatableLangDutch.json",
        },
    });

    $(document).on("click", ".rowNavItemFirstOne", function() { 
        
        var disciplineFirstOne = document.querySelector('.rowDisciplineFirstOne.selected');
        var opslag_id_discipline = disciplineFirstOne.getAttribute('id').replace('L ','');
        if(disciplineFirstOne !== null)
        {
            var currentRow = $(this);
            var className = $(currentRow).attr('class');
            if(className == "d-flex rowNavItemFirstOne even" || className == "d-flex rowNavItemFirstOne odd")
            {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/addItems",
                    data: { opslag_id_nav_item : opslag_id_nav_item ,opslag_id_discipline :opslag_id_discipline },
                    success : function () {
                        $(currentRow).addClass("selected");
                    }
                });
            }
            else
            {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/destroy",
                    data: { opslag_id_nav_item : opslag_id_nav_item ,opslag_id_discipline :opslag_id_discipline },
                    success : function () 
                    {
                        $(currentRow).removeClass("selected");
                    }
                });
            }
        }
    
        else
        {
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een Discipline.";
        }
    });

    $('#NavItemVerwijderenModal').on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
    });

    $(document).on("click", ".rowNavItemToDelete", function() { 
        $('.rowNavItemToDelete').each(function(){
        $(this).removeClass("selected");
        });
        var currentRow = $(this);
        $(currentRow).addClass("selected"); 
    });

    $(document).on("click", ".rowDisciplineToDelete", function() { 
        $('.rowDisciplineToDelete').each(function(){
        $(this).removeClass("selected");
        });
        var currentRow = $(this);
        $(currentRow).addClass("selected"); 
    });

    $(document).on("click", ".rowDisciplineToDelete2", function() { 
        $('.rowDisciplineToDelete2').each(function(){
        $(this).removeClass("selected");
        });
        var currentRow = $(this);
        $(currentRow).addClass("selected"); 
    });

    $('#DisciplineVerwijderenModal').on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
    });

    $('#DisciplineVerwijderenModal2').on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
    });

    $('#RoleVerwijderenModal').on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
    });

    $('#RoleVerwijderenModal2').on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
    });

    $('#UserVerwijderenModal').on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
    });
    $('#FirstCardBody').on('shown.bs.modal', function () {
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
    });

});

var opslag_userID = 0;

function selectUsers(userID)
{
    $('.rowUser').each(function(){
        $(this).removeClass("selected");
    });
    
    $('.rowRole2').each(function(){
        $(this).removeClass("selected");
    });
    var currentRow = document.querySelector(`[userID='`+userID.getAttribute("userID") +`']`);
    $(currentRow).addClass("selected");

    opslag_userID = userID.getAttribute("userID");

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getRelatedRoles",
        data: { opslag_userID : opslag_userID },
        success : function (data){
            var json = JSON.parse(data);
            if(json.length == 0){
                $("#modal_alert").modal('show');
                document.getElementById("modal_content").innerHTML = "Er zijn geen roles gekoppeld aan deze User.";
            }
            else{

                var tbl = document.getElementById('tblRoles2');
                var arrayID = new Array();
                for(x = 2; x < tbl.rows.length; x++)
                {
                    var roleId = tbl.rows[x].getAttribute("data-id");
                    arrayID.push(roleId);
                }
                for(x = 0; x < json.length; x++)
                {
                    if( arrayID.includes(json[x].roleID))
                    {
                        var currentRow = document.querySelector(`[data-id='`+ json[x].roleID +`']`);
                        $(currentRow).addClass("selected");
                    }
                }
                

            }
        }
    });
}
var opslag_researchPlanID;
function selectPlans(ResearchPlanID)
{
    $('.rowResearchPlan').removeClass("selected");
    $('.rowNavBarItem').removeClass("selected");
    var currentRow = document.getElementById(ResearchPlanID.getAttribute("id"));
    $(currentRow).addClass("selected");

    opslag_researchPlanID = ResearchPlanID.getAttribute("id");

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getRelatedNavBarItems",
        data: { opslag_researchPlanID : opslag_researchPlanID },
        success : function (data){
            var json = JSON.parse(data);

            var tbl = document.getElementById('tblNavBarItems');
            var arrayID = new Array();
            for(x = 0; x < tbl.rows.length; x++)
            {
                var navBarItemId = tbl.rows[x].getAttribute("data-itemID");
                arrayID.push(navBarItemId);
            }
            for(x = 0; x < json['NavBarItemsOfResearchPlan'].length; x++)
            {
                if( arrayID.includes(json['NavBarItemsOfResearchPlan'][x].navItemID))
                {
                    var currentRow = document.querySelector(`[data-itemID='`+ json['NavBarItemsOfResearchPlan'][x].navItemID +`']`);
                    $(currentRow).addClass("selected");
                }
            }
        }
    });

}

function selectParent(parent)
{
    $('.rowParent').removeClass("selected");
    $('.rowChild').removeClass("selected");

    var currentRow = document.getElementById(parent.getAttribute("id"));
    $(currentRow).addClass("selected");

    id = parent.getAttribute("id");
    opslag_parentID = id.replace('P', '');

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getRelatedChildren",
        data: { opslag_parentID : opslag_parentID },
        success : function (data){
            var json = JSON.parse(data);

            var tbl = document.getElementById('tblChildren');
            var arrayID = new Array();
            for(x = 0; x < tbl.rows.length; x++)
            {
                var childID = tbl.rows[x].getAttribute("id");
                arrayID.push(childID);
            }
            for(x = 0; x < json.length; x++)
            {
                if( arrayID.includes("C"+json[x].id))
                {
                    var currentRow = document.getElementById("C"+json[x].id);
                    $(currentRow).addClass("selected");
                }
            }
                

        }
    });

}

function selectRoles(roleID)
{
    $('.rowRole').removeClass("selected");
    $('.rowDiscipline').removeClass("selected");
    
    var currentRow = document.getElementById(roleID.getAttribute("id"));
    $(currentRow).addClass("selected");

    opslag_roleID = roleID.getAttribute("id").replace("Role","");

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getRelatedDisciplines",
        data: { opslag_roleID : opslag_roleID },
        success : function (data){
            var json = JSON.parse(data);

            var tbl = document.getElementById('tblDisciplineSecondOne');
            var arrayID = new Array();
            for(x = 0; x < tbl.rows.length; x++)
            {
                var disciplineId = tbl.rows[x].getAttribute("id");
                arrayID.push(disciplineId);
            }
            for(x = 0; x < json['DisciplinesOfRole'].length; x++)
            {
                if( arrayID.includes(json['DisciplinesOfRole'][x].disciplineID))
                {
                    var currentRow = document.getElementById(json['DisciplinesOfRole'][x].disciplineID);
                    $(currentRow).addClass("selected");
                }
            }
                

        }
    });

}

$(document).on('click','.naarRoles',function(){

    tableRoles = $('#tblRoleFirstOne').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        dom: 'Bfrtip',
        buttons:{
            buttons: [
                {
                    text: '<span class="material-icons-outlined pb-0">add</span>',
                    action: function ( e, dt, node, config ) {
                        $("#RoleToevoegenModal").modal('show');
                    },
                    className: 'btn btn-primary btn-sm p-0',
                },
                {
                    text: '<span class="material-icons-outlined pb-0">delete</span>',
                    action: function ( e, dt, node, config ) {
                        $("#RoleVerwijderenModal").modal('show');
                    },
                    className: 'btn btn-danger btn-sm p-0',
                }
            ],
            dom: {
                button: {
                  tag: "button",
                  className: "btn btn-primary btn-sm p-0",
                },
            },
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        }
    });

    tableDisciplines2 = $('#tblDisciplineSecondOne').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        dom: 'Bfrtip',
        buttons:{
            buttons: [
                {
                    text: '<span class="material-icons-outlined pb-0">add</span>',
                    action: function ( e, dt, node, config ) {
                        $("#DisciplineToevoegenModal2").modal('show');
                    },
                    className: 'btn btn-primary btn-sm p-0',
                },
                {
                    text: '<span class="material-icons-outlined pb-0">delete</span>',
                    action: function ( e, dt, node, config ) {
                        $("#DisciplineVerwijderenModal2").modal('show');
                    },
                    className: 'btn btn-danger btn-sm p-0',
                }
            ],
            dom: {
                button: {
                  tag: "button",
                  className: "btn btn-primary btn-sm p-0",
                },
            },
        },

        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        }
    });

    tableRoles.clear().draw(false);
    tableDisciplines2.clear().draw(false);

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getRole",
        data: { opslag_id_discipline : opslag_id_discipline, opslag_roleID : opslag_roleID },
        success : function (data){
            var json = JSON.parse(data);
            var size = Object.keys(json).length
            if(size == 2){

                $("#SecondCardBody").removeClass('hidden');
                $("#FirstCardBody").addClass('hidden');          
                $("#ThirdCardBody").addClass('hidden');          

                for(x = 0; x < json['AllRoles'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', 'Role'+json['AllRoles'][x]['id']);
                    tr.setAttribute('class', 'rowRole');
                    tr.setAttribute('onclick', 'selectRoles(this)');
                    
                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarUsers');
                    btn.setAttribute('data-rolesID', json['AllRoles'][x]['id']);
                    btn.setAttribute("onclick","getRoleID(this)");
                    btn.addEventListener("click", showUsers);

                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_less</span>`;
                    btn.style.borderRight = 'none';
                    btn.style.float= 'left';

                    var td = document.createElement("td");
                    td.style.borderRight = 'none';
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);
                

                    var td = document.createElement("td");
                    td.innerHTML = json['AllRoles'][x]['companyID'];
                    tr.append(td);
                    

                    var td = document.createElement("td");
                    td.style.borderLeft = 'none';
                    td.innerHTML = json['AllRoles'][x]['role'];
                    tr.append(td);

                    $('#tblRoleFirstOne').append(tr);

                }

                for(x = 0; x < json['AllDisciplines'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', json['AllDisciplines'][x]['id']);
                    tr.setAttribute('class', 'rowDiscipline');
                    tr.setAttribute('onclick', 'addOrUnlinkDisciplines(this)');

    
                    var td = document.createElement("td");
                    td.style.borderRight= 'none';
                    td.innerHTML = json['AllDisciplines'][x]['discipline'];
                    tr.append(td);


                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarNavigatie');
                    btn.setAttribute('data-disciplineID', json['AllDisciplines'][x]['id']);
                    btn.setAttribute('onclick', 'getDisciplineID(this)');
                    btn.addEventListener("click", showNavBarItems);


                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                    btn.style.float= 'right'; 

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);

                    $('#tblDisciplineSecondOne').append(tr);

                }
                $('.rowRole').removeClass('selected')
                $('.rowDiscipline').removeClass('selected')

                $("#modal_alert").modal('show');
                document.getElementById("modal_content").innerHTML = "Er zijn geen Koppelingen. Hier kunt u Disciplines aan een role koppelen.";
            }
            else{
                
                $("#SecondCardBody").removeClass('hidden');
                $("#FirstCardBody").addClass('hidden');  
                $("#ThirdCardBody").addClass('hidden');  


                for(x = 0; x < json['AllRoles'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', 'Role'+json['AllRoles'][x]['id']);
                    tr.setAttribute('class', 'rowRole');
                    tr.setAttribute('onclick', 'selectRoles(this)');
                    
                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarUsers');
                    btn.setAttribute('data-rolesID', json['AllRoles'][x]['id']);
                    btn.setAttribute("onclick","getRoleID(this)");
                    btn.addEventListener("click", showUsers);

                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_less</span>`;
                    btn.style.borderRight = 'none';
                    btn.style.float= 'left'; 

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.style.borderRight = 'none';
                    td.appendChild(btn);
                    tr.append(td);
                
                    var td = document.createElement("td");
                    td.style.borderLeft = 'none';
                    td.innerHTML = json['AllRoles'][x]['companyID'];
                    tr.append(td);
                    

                    var td = document.createElement("td");
                    td.innerHTML = json['AllRoles'][x]['role'];
                    tr.append(td);

                    $('#tblRoleFirstOne').append(tr);

                }
                if(opslag_roleID == 0){
                var row = document.getElementById("Role"+json['DisciplinesOfRole'][0]['roleID']);
                $(row).addClass("selected");
                }
                else{
                    if(json['DisciplinesBasedOnRoles'].length == 0)
                    {
                        var row = document.getElementById("Role"+opslag_roleID);
                        $(row).addClass("selected");
                    }
                    else{
                    var row = document.getElementById("Role"+json['DisciplinesBasedOnRoles'][0]['roleID']);
                    $(row).addClass("selected");
                    }
                }
                //same work for the Disciplines table

                for(x = 0; x < json['AllDisciplines'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', json['AllDisciplines'][x]['id']);
                    tr.setAttribute('class', 'rowDiscipline');
                    tr.setAttribute('onclick', 'addOrUnlinkDisciplines(this)');

    
                    var td = document.createElement("td");
                    td.style.borderRight= 'none';
                    td.innerHTML = json['AllDisciplines'][x]['discipline'];
                    tr.append(td);


                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarNavigatie');
                    btn.setAttribute('data-disciplineID', json['AllDisciplines'][x]['id']);
                    btn.setAttribute('onclick', 'getDisciplineID(this)');
                    btn.addEventListener("click", showNavBarItems);


                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                    btn.style.float= 'right'; 

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);
                    
                    $('#tblDisciplineSecondOne').append(tr);

                }
                if(opslag_roleID == 0){

                    for(x = 0; x < json['DisciplinesOfRole'].length; x++){
                    var row = document.getElementById(json['DisciplinesOfRole'][x]['disciplineID']);
                    $(row).addClass("selected");

                    }
                }
                else
                {
                    for(x = 0; x < json['DisciplinesBasedOnRoles'].length; x++){
                        var row = document.getElementById(json['DisciplinesBasedOnRoles'][x]['disciplineID']);
                        $(row).addClass("selected");
        
                    }
                }
            }
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
        }
    });
});

$(document).on('click','#btnNaarDisciplines',function(e){

    tableRoles = $('#tblRoleFirstOne').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        dom: 'Bfrtip',
        buttons:{
            buttons: [
                {
                    text: '<span class="material-icons-outlined pb-0">add</span>',
                    action: function ( e, dt, node, config ) {
                        $("#RoleToevoegenModal").modal('show');
                    },
                    className: 'btn btn-primary btn-sm p-0',
                },
                {
                    text: '<span class="material-icons-outlined pb-0">delete</span>',
                    action: function ( e, dt, node, config ) {
                        $("#RoleVerwijderenModal").modal('show');
                    },
                    className: 'btn btn-danger btn-sm p-0',
                }
            ],
            dom: {
                button: {
                  tag: "button",
                  className: "btn btn-primary btn-sm p-0",
                },
            },
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        }
    });

    tableDisciplines2 = $('#tblDisciplineSecondOne').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        dom: 'Bfrtip',
        buttons:{
            buttons: [
                {
                    text: '<span class="material-icons-outlined pb-0">add</span>',
                    action: function ( e, dt, node, config ) {
                        $("#DisciplineToevoegenModal2").modal('show');
                    },
                    className: 'btn btn-primary btn-sm p-0',
                },
                {
                    text: '<span class="material-icons-outlined pb-0">delete</span>',
                    action: function ( e, dt, node, config ) {
                        $("#DisciplineVerwijderenModal2").modal('show');
                    },
                    className: 'btn btn-danger btn-sm p-0',
                }
            ],
            dom: {
                button: {
                  tag: "button",
                  className: "btn btn-primary btn-sm p-0",
                },
            },
        },

        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        }
    });

    tableRoles.clear().draw(false);
    tableDisciplines2.clear().draw(false);

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getRole",
        data: { opslag_id_discipline : opslag_id_discipline, opslag_roleID : opslag_roleID },
        success : function (data){
            var json = JSON.parse(data);
            var size = Object.keys(json).length
            if(size == 2){

                $("#SecondCardBody").removeClass('hidden');
                $("#FirstCardBody").addClass('hidden');          
                $("#ThirdCardBody").addClass('hidden');          

                for(x = 0; x < json['AllRoles'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', 'Role'+json['AllRoles'][x]['id']);
                    tr.setAttribute('class', 'rowRole');
                    tr.setAttribute('onclick', 'selectRoles(this)');
                    
                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarUsers');
                    btn.setAttribute('data-rolesID', json['AllRoles'][x]['id']);
                    btn.setAttribute("onclick","getRoleID(this)");
                    btn.addEventListener("click", showUsers);

                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_less</span>`;
                    btn.style.borderRight = 'none';
                    btn.style.float= 'left';

                    var td = document.createElement("td");
                    td.style.borderRight = 'none';
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);
                

                    var td = document.createElement("td");
                    td.innerHTML = json['AllRoles'][x]['companyID'];
                    tr.append(td);
                    

                    var td = document.createElement("td");
                    td.style.borderLeft = 'none';
                    td.innerHTML = json['AllRoles'][x]['role'];
                    tr.append(td);

                    $('#tblRoleFirstOne').append(tr);

                }

                for(x = 0; x < json['AllDisciplines'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', json['AllDisciplines'][x]['id']);
                    tr.setAttribute('class', 'rowDiscipline');
                    tr.setAttribute('onclick', 'addOrUnlinkDisciplines(this)');

    
                    var td = document.createElement("td");
                    td.style.borderRight= 'none';
                    td.innerHTML = json['AllDisciplines'][x]['discipline'];
                    tr.append(td);


                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarNavigatie');
                    btn.setAttribute('data-disciplineID', json['AllDisciplines'][x]['id']);
                    btn.setAttribute('onclick', 'getDisciplineID(this)');
                    btn.addEventListener("click", showNavBarItems);


                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                    btn.style.float= 'right'; 

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);

                    $('#tblDisciplineSecondOne').append(tr);

                }
                $('.rowRole').removeClass('selected')
                $('.rowDiscipline').removeClass('selected')

                $("#modal_alert").modal('show');
                document.getElementById("modal_content").innerHTML = "Er zijn geen Koppelingen. Hier kunt u Disciplines aan een role koppelen.";
            }
            else{
                
                $("#SecondCardBody").removeClass('hidden');
                $("#FirstCardBody").addClass('hidden');  
                $("#ThirdCardBody").addClass('hidden');  


                for(x = 0; x < json['AllRoles'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', 'Role'+json['AllRoles'][x]['id']);
                    tr.setAttribute('class', 'rowRole');
                    tr.setAttribute('onclick', 'selectRoles(this)');
                    
                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarUsers');
                    btn.setAttribute('data-rolesID', json['AllRoles'][x]['id']);
                    btn.setAttribute("onclick","getRoleID(this)");
                    btn.addEventListener("click", showUsers);

                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_less</span>`;
                    btn.style.borderRight = 'none';
                    btn.style.float= 'left'; 

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.style.borderRight = 'none';
                    td.appendChild(btn);
                    tr.append(td);
                
                    var td = document.createElement("td");
                    td.style.borderLeft = 'none';
                    td.innerHTML = json['AllRoles'][x]['companyID'];
                    tr.append(td);
                    

                    var td = document.createElement("td");
                    td.innerHTML = json['AllRoles'][x]['role'];
                    tr.append(td);

                    $('#tblRoleFirstOne').append(tr);

                }
                if(opslag_roleID == 0){
                var row = document.getElementById("Role"+json['DisciplinesOfRole'][0]['roleID']);
                $(row).addClass("selected");
                }
                else{
                    if(json['DisciplinesBasedOnRoles'].length == 0)
                    {
                        var row = document.getElementById("Role"+opslag_roleID);
                        $(row).addClass("selected");
                    }
                    else{
                    var row = document.getElementById("Role"+json['DisciplinesBasedOnRoles'][0]['roleID']);
                    $(row).addClass("selected");
                    }
                }
                //same work for the Disciplines table

                for(x = 0; x < json['AllDisciplines'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', json['AllDisciplines'][x]['id']);
                    tr.setAttribute('class', 'rowDiscipline');
                    tr.setAttribute('onclick', 'addOrUnlinkDisciplines(this)');

    
                    var td = document.createElement("td");
                    td.style.borderRight= 'none';
                    td.innerHTML = json['AllDisciplines'][x]['discipline'];
                    tr.append(td);


                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarNavigatie');
                    btn.setAttribute('data-disciplineID', json['AllDisciplines'][x]['id']);
                    btn.setAttribute('onclick', 'getDisciplineID(this)');
                    btn.addEventListener("click", showNavBarItems);


                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                    btn.style.float= 'right'; 

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);
                    
                    $('#tblDisciplineSecondOne').append(tr);

                }
                if(opslag_roleID == 0){

                    for(x = 0; x < json['DisciplinesOfRole'].length; x++){
                    var row = document.getElementById(json['DisciplinesOfRole'][x]['disciplineID']);
                    $(row).addClass("selected");

                    }
                }
                else
                {
                    for(x = 0; x < json['DisciplinesBasedOnRoles'].length; x++){
                        var row = document.getElementById(json['DisciplinesBasedOnRoles'][x]['disciplineID']);
                        $(row).addClass("selected");
        
                    }
                }
            }
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
        }
    });
    e.stopPropagation();
});

$(document).on("click", ".naarChildren", function(e) { 
    tableParents = $('#tblParents').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        }
    });

    tableChildren = $('#tblChildren').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        }
    });

    tableParents.clear().draw(false);
    tableChildren.clear().draw(false);

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getChildren",
        data: { opslag_childID : opslag_childID},
        success : function (data){
            var json = JSON.parse(data);
            var size = Object.keys(json).length
            if(size == 2){

                $("#FirstCardBody").addClass('hidden');  
                $("#FifthCardBody").removeClass('hidden');

                for(x = 0; x < json['All'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', "P"+json['All'][x]['id']);
                    tr.setAttribute('class', 'rowParent');
                    tr.setAttribute('onclick', 'getParentID(this.id)');

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.style.borderRight = 'none';

                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.addEventListener("click", showNavBarItems2);
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_less</span>`;

                    td.appendChild(btn);
                    tr.append(td);

                    var td = document.createElement("td");
                    td.style.borderLeft = 'none';
                    td.style.width = '60%';
                    td.innerHTML = json['All'][x]['name'];
                    tr.append(td);

                    var td = document.createElement("td");
                    td.style.width = '40%';
                    td.innerHTML = json['All'][x]['parent_id'];
                    tr.append(td);

                    $('#tblParents').append(tr);

                    var tr1 = document.createElement("tr");
                    tr1.setAttribute('id', "C"+json['All'][x]['id']);
                    tr1.setAttribute('class', 'rowChild');
                    tr1.setAttribute('onclick', 'getChildID(this.id)');

                    var td = document.createElement("td");
                    td.innerHTML = json['All'][x]['name'];
                    td.style.width = "50%"
                    tr1.append(td);

                    var td = document.createElement("td");
                    td.innerHTML = json['All'][x]['parent_id'];
                    td.style.width = "50%"
                    tr1.append(td);

                    $('#tblChildren').append(tr1);

                }

                row = document.getElementById('P'+opslag_childID)
                $(row).addClass("selected");

                NavBarItem = json['ClickedItem'][0]['name']
                $("#modal_alert").modal('show');
                document.getElementById("modal_content").innerHTML = NavBarItem+" heeft geen onderliggenden. Hier kunt u onderliggenden aan "+NavBarItem +" koppelen.";
            }
            else{
                
                $("#FirstCardBody").addClass('hidden');  
                $("#FifthCardBody").removeClass('hidden');

                for(x = 0; x < json['All'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', "P"+json['All'][x]['id']);
                    tr.setAttribute('class', 'rowParent');
                    tr.setAttribute('onclick', 'getParentID(this.id)');

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.style.borderRight = 'none';

                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.addEventListener("click", showNavBarItems2);
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_less</span>`;

                    td.appendChild(btn);
                    tr.append(td);

                    var td = document.createElement("td");
                    td.style.borderLeft = 'none';
                    td.style.width = '60%';
                    td.innerHTML = json['All'][x]['name'];
                    tr.append(td);

                    var td = document.createElement("td");
                    td.style.width = '40%';
                    td.innerHTML = json['All'][x]['parent_id'];
                    tr.append(td);

                    

                    $('#tblParents').append(tr);

                    var tr1 = document.createElement("tr");
                    tr1.setAttribute('id', "C"+json['All'][x]['id']);
                    tr1.setAttribute('class', 'rowChild');
                    tr1.setAttribute('onclick', 'getChildID(this.id)');

                    var td = document.createElement("td");
                    td.innerHTML = json['All'][x]['name'];
                    td.style.width = "50%"
                    tr1.append(td);

                    var td = document.createElement("td");
                    td.innerHTML = json['All'][x]['parent_id'];
                    td.style.width = "50%"
                    tr1.append(td);

                    $('#tblChildren').append(tr1);

                }

                row = document.getElementById('P'+opslag_childID)
                $(row).addClass("selected");

                for(x = 0; x < json['Children'].length; x++){

                    var row = document.getElementById("C"+json['Children'][x]['id']);
                    $(row).addClass("selected");

                }
            }
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
            
        }
    });
    e.stopPropagation();
});


$(document).on("click", ".naarResearchPlan", function(e) {

    tableResearchPlan = $('#tblResearchPlans').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
            $('.dataTables_empty').hide();
            }
        }
    });
    tableNavBarItems = $('#tblNavBarItems ').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        }
    });

    tableResearchPlan.clear().draw(false);
    tableNavBarItems.clear().draw(false);
    
    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getResearchPlan",
        data: { opslag_id_nav_item : opslag_id_nav_item, opslag_researchPlanID : opslag_researchPlanID},
        success : function (data){
            var json = JSON.parse(data);
            var size = Object.keys(json).length
            if(size == 2){

                $("#FirstCardBody").addClass('hidden');  
                $("#SecondCardBody").addClass('hidden');
                $("#ThirdCardBody").addClass('hidden');
                $("#FourthCardBody").removeClass('hidden');  
  

                for(x = 0; x < json['AllResearchPlans'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', json['AllResearchPlans'][x]['UniqueID']);
                    tr.setAttribute('class', 'rowResearchPlan');
                    tr.setAttribute('onclick', 'selectPlans(this)');

                    var td = document.createElement("td");
                    td.innerHTML = json['AllResearchPlans'][x]['Name'];
                    tr.append(td);

                    $('#tblResearchPlans').append(tr);

                }

                for(x = 0; x < json['AllNavBarItems'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('data-itemID', json['AllNavBarItems'][x]['id']);
                    tr.setAttribute('class', 'rowNavBarItem');
                    tr.setAttribute('onclick', 'addOrUnlinkNavItem(this)');

                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarViews');
                    btn.addEventListener("click", showViews);
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0"> chevron_left </span>`;
                    btn.style.float= 'left';

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);
    
                    var td = document.createElement("td");
                    td.style.borderRight= 'none';
                    td.innerHTML = json['AllNavBarItems'][x]['name'];
                    tr.append(td);


                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarNavBarItems');
                    btn.setAttribute('data-navBarItemID', json['AllNavBarItems'][x]['id']);
                    btn.setAttribute('onclick', 'getNavBarID(this)');
                    btn.addEventListener("click", showNavBarItems2);
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                    btn.style.float= 'right';

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);

                    $('#tblNavBarItems').append(tr);

                }
                $("#modal_alert").modal('show');
                document.getElementById("modal_content").innerHTML = "Er zijn geen ResearchPlans gekoppeld aan deze NavBarItem. Hier kunt u NavBarItem aan een ResearchPlan koppelen.";
            }
            else{
                
                $("#FirstCardBody").addClass('hidden');  
                $("#SecondCardBody").addClass('hidden');
                $("#ThirdCardBody").addClass('hidden');
                $("#FourthCardBody").removeClass('hidden');  
  


                for(x = 0; x < json['AllResearchPlans'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('id', json['AllResearchPlans'][x]['UniqueID']);
                    tr.setAttribute('class', 'rowResearchPlan');
                    tr.setAttribute('onclick', 'selectPlans(this)');

                    var td = document.createElement("td");
                    td.innerHTML = json['AllResearchPlans'][x]['Name'];
                    tr.append(td);

                    $('#tblResearchPlans').append(tr);

                }
                for(x = 0; x < json['ResearchPlansOfNavBarItem'].length; x++){

                    var row = document.getElementById(json['ResearchPlansOfNavBarItem'][x]['researchPlanShort']);
                    $(row).addClass("selected");

                }
                
                //same work for the NavBarItems table

                for(x = 0; x < json['AllNavBarItems'].length; x++){

                    var tr = document.createElement("tr");
                    tr.setAttribute('data-itemID', json['AllNavBarItems'][x]['id']);
                    tr.setAttribute('class', 'rowNavBarItem');
                    tr.setAttribute('onclick', 'addOrUnlinkNavItem(this)');

                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarViews');
                    btn.addEventListener("click", showViews);
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0"> chevron_left </span>`;
                    btn.style.float= 'left';

                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.style.borderRight = 'none';
                    td.appendChild(btn);
                    tr.append(td);
    
                    var td = document.createElement("td");
                    td.style.borderRight= 'none';
                    td.style.borderLeft= 'none';
                    td.innerHTML = json['AllNavBarItems'][x]['name'];
                    tr.append(td);


                    var btn = document.createElement("button");
                    btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                    btn.setAttribute('id', 'naarNavBarItems');
                    btn.setAttribute('data-navBarItemID', json['AllNavBarItems'][x]['id']);
                    btn.setAttribute('onclick', 'getNavBarID(this)');
                    btn.addEventListener("click", showNavBarItems2);
                    
                    btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                    btn.style.float= 'right'; 
                    
                    var td = document.createElement("td");
                    td.style.width = '0%';
                    td.appendChild(btn);
                    tr.append(td);

                    $('#tblNavBarItems').append(tr);

                }

                var row = document.getElementById(json['NavBarItemOfResearchPlans'][0]['navItemID']);
                $(row).addClass("selected");

            }
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
            
        }
    });
    e.stopPropagation();
});


    function showUsers()
    {
        tableUsers = $('#tblUsers').DataTable({
            retrieve: true,
            bSort: false,
            info: false,
            filter: false,
            autoWidth: false,
            scrollY: "500px",
            scrollX: false,
            scrollCollapse: true,
            scroller: true,
            deferRender: true,
            paging: false,
            language: {
                url: $("#url").val() + "Libs/DatatableLangDutch.json",
            },
            dom: 'Bfrtip',
            buttons:{
                buttons: [
                    {
                        text: '<span class="material-icons-outlined pb-0">add</span>',
                        action: function ( e, dt, node, config ) {
                            $("#UserToevoegenModal").modal('show');
                        },
                        className: 'btn btn-primary btn-sm p-0',
                    },
                    {
                        text: '<span class="material-icons-outlined pb-0">delete</span>',
                        action: function ( e, dt, node, config ) {
                            $("#UserVerwijderenModal").modal('show');
                        },
                        className: 'btn btn-danger btn-sm p-0',
                    }
                ],
                dom: {
                    button: {
                      tag: "button",
                      className: "btn btn-primary btn-sm p-0",
                    },
                },
            },
            fnDrawCallback : function() {
                if ($(this).find('.dataTables_empty').length == 1) {
                   $('.dataTables_empty').hide();
                }
            }
        });
    
        tableRoles2 = $('#tblRoles2').DataTable({
            retrieve: true,
            bSort: false,
            info: false,
            filter: false,
            autoWidth: false,
            scrollY: "500px",
            scrollX: false,
            scrollCollapse: true,
            scroller: true,
            deferRender: true,
            paging: false,
            language: {
                url: $("#url").val() + "Libs/DatatableLangDutch.json",
            },
            dom: 'Bfrtip',
            buttons:{
                buttons: [
                    {
                        text: '<span class="material-icons-outlined pb-0">add</span>',
                        action: function ( e, dt, node, config ) {
                            $("#RoleToevoegenModal2").modal('show');
                        },
                        className: 'btn btn-primary btn-sm p-0',
                    },
                    {
                        text: '<span class="material-icons-outlined pb-0">delete</span>',
                        action: function ( e, dt, node, config ) {
                            $("#RoleVerwijderenModal2").modal('show');
                        },
                        className: 'btn btn-danger btn-sm p-0',
                    }
                ],
                dom: {
                    button: {
                      tag: "button",
                      className: "btn btn-primary btn-sm p-0",
                    },
                },
            },
    
            fnDrawCallback : function() {
                if ($(this).find('.dataTables_empty').length == 1) {
                   $('.dataTables_empty').hide();
                }
            }
        });

        tableUsers.clear().draw(false);
        tableRoles2.clear().draw(false);

        $.ajax({
            method: "POST",
            type: "POST",
            dataType: "html",
            url:"..//AdminNavbar/getUser",
            data: { opslag_roleID : opslag_roleID },
            success : function (data){
                var json = JSON.parse(data);
                var size = Object.keys(json).length
                if(size == 2){

                    $("#ThirdCardBody").removeClass('hidden');
                    $("#SecondCardBody").addClass('hidden'); 

                    for(x = 0; x < json['AllUsers'].length; x++){

                        var tr = document.createElement("tr");
                        tr.setAttribute('class', 'rowUser');
                        tr.setAttribute('onclick', 'selectUsers(this)');
                        tr.setAttribute('id', json['AllUsers'][x]['id']);
                        tr.setAttribute('userID', json['AllUsers'][x]['id']);


                        

                        var td = document.createElement("td");
                        td.innerHTML = json['AllUsers'][x]['contactSalutation'];
                        tr.append(td);

                        var td = document.createElement("td");
                        td.innerHTML = json['AllUsers'][x]['contactFirstname'] + ' ' + json['AllUsers'][x]['contactSurname'];
                        tr.append(td);

                        $('#tblUsers').append(tr);

                    }

                    for(x = 0; x < json['AllRoles'].length; x++){

                        var tr = document.createElement("tr");
                        tr.setAttribute('data-id', json['AllRoles'][x]['id']);
                        tr.setAttribute('class', 'rowRole2');
                        tr.setAttribute('onclick', 'addOrUnlinkRoles(this)');
                        

                        var td = document.createElement("td");
                        td.style.borderRight = 'none';
                        td.innerHTML = json['AllRoles'][x]['role'];
                        tr.append(td);


                        var btn = document.createElement("button");
                        btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                        btn.setAttribute('id', 'btnNaarDisciplines');
                        btn.setAttribute('roleID', json['AllRoles'][x]['id']);
                        btn.setAttribute('onclick', 'getRoleId(this)');

                        
                        btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                        btn.style.float= 'right'; 

                        var td = document.createElement("td");
                        td.style.width = '0%';
                        td.appendChild(btn);
                        tr.append(td);
                        
                        $('#tblRoles2').append(tr);

                    }
                    $(".rowUser").removeClass('selected');
                    $(".rowRole2").removeClass('selected');
                    $("#modal_alert").modal('show');
                    document.getElementById("modal_content").innerHTML = "Er zijn geen Users gekoppeld aan deze Role. Hier kunt u Roles aan een User koppelen.";
                }
                else{
                    $("#ThirdCardBody").removeClass('hidden');
                    $("#SecondCardBody").addClass('hidden'); 

                    for(x = 0; x < json['AllUsers'].length; x++){

                        var tr = document.createElement("tr");
                        tr.setAttribute('class', 'rowUser');
                        tr.setAttribute('onclick', 'selectUsers(this)');
                        tr.setAttribute('id', json['AllUsers'][x]['id']);
                        tr.setAttribute('userID', json['AllUsers'][x]['id']);

                        var td = document.createElement("td");
                        td.innerHTML = json['AllUsers'][x]['contactSalutation'];
                        tr.append(td);

                        var td = document.createElement("td");
                        td.innerHTML = json['AllUsers'][x]['contactFirstname'] + ' ' + json['AllUsers'][x]['contactSurname'];
                        tr.append(td);

                        $('#tblUsers').append(tr);

                    }

                    for(x = 0; x < json['UsersOfRole'].length; x++){
                    var row = document.querySelector(`[userID='`+ json['UsersOfRole'][x]['id'] +`']`);
                    $(row).addClass("selected");
                    }
                    //same work for the Roles table

                    for(x = 0; x < json['AllRoles'].length; x++){

                        var tr = document.createElement("tr");
                        tr.setAttribute('data-id', json['AllRoles'][x]['id']);
                        tr.setAttribute('class', 'rowRole2');
                        tr.setAttribute('onclick', 'addOrUnlinkRoles(this)');
                        

                        var td = document.createElement("td");
                        td.style.borderRight = 'none';
                        td.innerHTML = json['AllRoles'][x]['role'];
                        tr.append(td);


                        var btn = document.createElement("button");
                        btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
                        btn.setAttribute('id', 'btnNaarDisciplines');
                        btn.setAttribute('roleID', json['AllRoles'][x]['id']);
                        btn.setAttribute('onclick', 'getRoleId(this)');

                        btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
                        btn.style.float= 'right'; 

                        var td = document.createElement("td");
                        td.style.width = '0%';
                        td.appendChild(btn);
                        tr.append(td);
                        
                        $('#tblRoles2').append(tr);

                    }

                    for(x = 0; x < json['RolesOfUser'].length; x++){
                        var row = document.querySelector(`[data-id='`+json['RolesOfUser'][x]['roleID'] +`']`);
                        $(row).addClass('selected');
                    }
                    
                }
                $($.fn.dataTable.tables(true)).DataTable()
                .columns.adjust();
            }
        });
    }

    var selectedResearchPlans= new Array();
    var opslag_gekoppelde_NavBarItem = 0;
    function addOrUnlinkNavItem(navBarItemID)
    {
        opslag_gekoppelde_NavBarItem = navBarItemID.getAttribute("data-itemID");

        var tableResearchPlan= document.getElementById("tblResearchPlans");
        for(x = 0; x < tableResearchPlan.rows.length; x++)
        {
            var isSelected = tableResearchPlan.rows[x].getAttribute("class");
            selectedResearchPlans.push(isSelected);
        }
        if(selectedResearchPlans.includes('rowResearchPlan selected'))
        {
            selectedRow = document.querySelector(".rowResearchPlan.selected")
            var currentRow = navBarItemID;
            var className = $(currentRow).attr("class");
            if(className !== "rowNavBarItem selected")
            {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/addNavBarItemToResearchPlan",
                    data: { opslag_researchPlanID : opslag_researchPlanID ,opslag_gekoppelde_NavBarItem :opslag_gekoppelde_NavBarItem },
                    success : function () {
                        $(currentRow).addClass("selected");
                    }
                });
            }
            else
            {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/unlinkNavBarItem",
                    data: { opslag_researchPlanID : opslag_researchPlanID ,opslag_gekoppelde_NavBarItem :opslag_gekoppelde_NavBarItem },
                    success : function () 
                    {
                        $(currentRow).removeClass("selected");
                    }
                });
            }
        }
        else{
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een ResearchPlan.";
        }
    }

    var selectedRole = new Array();
    function addOrUnlinkDisciplines(discipline)
    {
        opslag_gekoppelde_discipline = discipline.getAttribute("id");
        var tableRoles = document.getElementById("tblRoleFirstOne");
        for(x = 0; x < tableRoles.rows.length; x++)
        {
            var isSelected = tableRoles.rows[x].getAttribute("class");
            selectedRole.push(isSelected);
        }
        if(selectedRole.includes('rowRole selected'))
        {
            selectedRow = document.querySelector(".rowRole.selected")
            var id = selectedRow.getAttribute('id');
            var currentRow = discipline;
            var className = $(currentRow).attr('class');
            if(className !== "rowDiscipline selected")
            {
                opslag_roleID = id.replace('Role','');
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/addDisciplinesToRole",
                    data: { opslag_roleID : opslag_roleID ,opslag_gekoppelde_discipline :opslag_gekoppelde_discipline },
                    success : function () {
                        $(currentRow).addClass("selected");
                    }
                });
            }
            else
            {
                opslag_roleID = id.replace('Role','');;
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/unlinkDisciplines",
                    data: { opslag_roleID : opslag_roleID ,opslag_gekoppelde_discipline :opslag_gekoppelde_discipline },
                    success : function () 
                    {
                        $(currentRow).removeClass("selected");
                    }
                });
            }
        }
        else{
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een Role.";
        }
    }


    var selectedUser = new Array();
    var opslag_gekoppelde_role= 0;
    function addOrUnlinkRoles(Role)
    {
        opslag_gekoppelde_role = Role.getAttribute("data-id");
        var tableUsers = document.getElementById("tblUsers");
        for(x = 0; x < tableUsers.rows.length; x++)
        {
            var isSelected = tableUsers.rows[x].getAttribute("class");
            selectedUser.push(isSelected);
        }
        if(selectedUser.includes('rowUser selected'))
        {
            selectedRow = document.querySelector(".rowUser.selected")
            var currentRow = Role;
            var className = $(currentRow).attr('class');
            if(className !== "rowRole2 selected")
            {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/addRolesToUser",
                    data: { opslag_userID : opslag_userID ,opslag_gekoppelde_role :opslag_gekoppelde_role },
                    success : function () {
                        $(currentRow).addClass("selected");
                    }
                });
            }
            else
            {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/unlinkRoles",
                    data: { opslag_userID : opslag_userID ,opslag_gekoppelde_role :opslag_gekoppelde_role },
                    success : function () 
                    {
                        $(currentRow).removeClass("selected");
                    }
                });
            }
        }
        else{
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een User.";
        }
    }

    var opslag_gekoppelde_child= 0;
    function addOrUnlinkChildren(child)
    {
        opslag_gekoppelde_child = child.getAttribute("id").replace("C","");

        
        var tableParents = document.getElementById("tblParents");
        for(x = 0; x < tableParents.rows.length; x++)
        {
            var isSelected = tableParents.rows[x].getAttribute("class");
            selectedUser.push(isSelected);
        }
        if(selectedUser.includes('rowParent selected'))
        {
            selectedRow = document.querySelector(".rowParent.selected")
            var id = selectedRow.getAttribute('id');
            var currentRow = child;
            var className = $(currentRow).attr('class');
            if(className !== "rowChild selected")
            {
                opslag_parentID = id.replace("P","");
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/addChild",
                    data: { opslag_parentID : opslag_parentID ,opslag_gekoppelde_child :opslag_gekoppelde_child },
                    success : function () {
                        $(currentRow).addClass("selected");
                    }
                });
            }
            else
            {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url:"..//AdminNavbar/unlinkChild",
                    data: {opslag_gekoppelde_child :opslag_gekoppelde_child },
                    success : function () 
                    {
                        $(currentRow).removeClass("selected");
                    }
                });
            }
        }
        else{
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een Parent.";
        }
    }


    function showNavBarItems(e)
    {
        $.ajax({
            method: "POST",
            type: "POST",
            dataType: "html",
            url:"..//AdminNavbar/getLinkedItems",
            data: { opslag_id_discipline : opslag_id_discipline },
            success : function (data){    
                $("#FirstCardBody").removeClass('hidden');
                $("#SecondCardBody").addClass('hidden');
                $("#ThirdCardBody").addClass('hidden');

                $('.rowDisciplineFirstOne').removeClass("selected");
                $('.rowNavItemFirstOne').removeClass("selected");

                var currentRow = document.getElementById("L "+opslag_id_discipline);
                $(currentRow).addClass("selected");

                var json = JSON.parse(data)
                var allLinkedItems = new Array();
                for (i = 0; i < json.length; i++) 
                {
                    var LinkedItem = json[i].itemID;
                    allLinkedItems.push(LinkedItem);
                    let row = document.getElementById("R "+allLinkedItems[i])
                    $(row).addClass("selected");
                }

                opslag_roleID = 0;
            }
        });
        e.stopPropagation();
    }

    function showNavBarItems2(e)
    {
        $("#FirstCardBody").removeClass('hidden');
        $("#FourthCardBody").addClass('hidden');
        $("#FifthCardBody").addClass('hidden');
        e.stopPropagation();
    }

    $(document).on("click", ".showPlans", function(e) { 
        $("#FourthCardBody").removeClass('hidden');
        $("#SixthCardBody").addClass('hidden');
        e.stopPropagation();
    });


var opslag_id_discipline = 0;
function getIdDiscipline(clicked_id_discipline)
{
    console.log("Id van deze regel is: " + clicked_id_discipline);
    opslag_id_discipline = clicked_id_discipline.replace('L', '');
}

var opslag_id_nav_item = 0;
function getIdNavBarItem(clicked_id_nav_item)
{
    console.log("Id van deze regel is: " + clicked_id_nav_item);
    opslag_id_nav_item = clicked_id_nav_item.replace('R', '');
}

var opslag_parentID = 0;
function getParentID(clicked_parent)
{
    console.log("Id van deze regel is: " + clicked_parent);
    opslag_parentID = clicked_parent.replace('P', '');
}

var opslag_childID = 0;
function getChildID(clicked_childID)
{
    console.log("Id van deze regel is: " + clicked_childID);
    opslag_childID = clicked_childID.replace('C', '');
}

function getPID(clicked_childID)
{
    id = clicked_childID.getAttribute("data-id");
    opslag_childID = id.replace('C', '');
}

var opslag_roleID = 0;
function getRoleID(clicked_roleID)
{
    opslag_roleID = clicked_roleID.getAttribute("data-rolesID")
}

function getRoleId(clicked_role)
{
    opslag_roleID = clicked_role.getAttribute("roleID")
}

$(document).on("click", ".rowParent", function() { 
    selectParent(this);
});

$(document).on("click", ".rowChild", function() { 
    addOrUnlinkChildren(this);
});

function getUserId(clicked_User)
{
    opslag_userID = clicked_User.getAttribute("id")
}

$(document).on("click", ".rowRoleToDelete", function() { 
    $('.rowRoleToDelete').each(function(){
    $(this).removeClass("selected");
    });
    var currentRow = $(this);
    $(currentRow).addClass("selected"); 
});

$(document).on("click", ".rowRoleToDelete2", function() { 
    $('.rowRoleToDelete2').each(function(){
    $(this).removeClass("selected");
    });
    var currentRow = $(this);
    $(currentRow).addClass("selected"); 
});

$(document).on("click", ".rowUserToDelete", function() { 
    $('.rowUserToDelete').each(function(){
    $(this).removeClass("selected");
    });
    var currentRow = $(this);
    $(currentRow).addClass("selected"); 
});

function selectRoleID(selectedRole)
{
    opslag_roleID = selectedRole
}

function getDisciplineID(clicked_disciplineID)
{
    opslag_id_discipline = clicked_disciplineID.getAttribute("data-disciplineID")
}

function getNavBarID(clicked_navBarItem)
{
    opslag_id_nav_item = clicked_navBarItem.getAttribute("data-navBarItemID")
}

function sendAjaxToGetLinkedItems(){
    $.ajax({
        method: "POST",
        type: "POST",
        url:"..//AdminNavbar/getLinkedItems",
        data: { opslag_id_discipline :opslag_id_discipline },
        success : function (data) {
            var json = JSON.parse(data)
            var allLinkedItems = new Array();
            for (i = 0; i < json.length; i++) 
            {
                var LinkedItem = json[i].itemID;
                allLinkedItems.push(LinkedItem);
                let row = document.getElementById("R "+allLinkedItems[i])
                $(row).addClass("selected");
            }
        },
    });
}

function sendNavItemID(){

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/deleteNavItem",
        data: { opslag_id_nav_item : opslag_id_nav_item },
        success : function (data){
            var json = JSON.parse(data)
            if(json == "0"){
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een Item.";
            }
            else{
                document.location.href= "..//AdminNavbar/overview";
            }
        }
    });
    
}

function sendDisciplineIDToDelete(){

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/deleteDiscipline",
        data: { opslag_id_discipline : opslag_id_discipline },
        success : function (data){
            var json = JSON.parse(data)
            if(json == "0"){
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een Discipline.";
            }
            else{
                document.location.href= "..//AdminNavbar/overview";
            }
        }
    });
    
}

function sendRoleIDToDelete(){

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/deleteRole",
        data: { opslag_roleID : opslag_roleID },
        success : function (data){
            var json = JSON.parse(data)
            if(json == "0"){
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een Role.";
            }
            else{
                document.location.href= "..//AdminNavbar/overview";
            }
        }
    });
    
}

function sendUserIDToDelete(){

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/deleteUser",
        data: { opslag_userID : opslag_userID },
        success : function (data){
            var json = JSON.parse(data)
            if(json == "0"){
            $("#modal_alert").modal('show');
            document.getElementById("modal_content").innerHTML = "Selecteer eerst een User.";
            }
            else{
                document.location.href= "..//AdminNavbar/overview";
            }
        }
    });
    
}



$(document).on('submit','#addNavItemForm',function(e){
    e.preventDefault();

    $.ajax({
        method:"POST",
        url: "..//AdminNavbar/addNavItem",
        data:$(this).serialize(),
        success: function(data){
            var nameNav = document.getElementById('nameNav').value;
            var disciplineOptie = document.getElementById('disciplineName').value;
            document.getElementById("modal_content_toegevoegd").innerHTML = nameNav + " is toegevoegd en gekoppeld aan "+ disciplineOptie+".";
            $("#modal_alert_toegevoegd").modal('show');
            $("#NavItemToevoegenModal").modal('hide');
            var json = JSON.parse(data);
            var id = json[0].id;
            var name = json[0].name;
            var parent_id = json[0].parent_id;

            var row = document.createElement("tr");
            row.setAttribute("class", "d-flex rowNavItemFirstOne");
            row.setAttribute("id", "R "+id);

            var td1 = document.createElement("td");
            td1.style.width = '50.9%';

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm p-0 naarResearchPlan');
            btn.setAttribute('id', "R "+id);
            btn.setAttribute('onclick', 'getIdNavBarItem(this.id)');


            btn.innerHTML= `<span class="material-icons-outlined pb-0">expand_less</span>`;
            btn.style.borderRight = 'none';
            btn.style.marginLeft = '1%';
            btn.style.marginRight = '10%';
            btn.style.float= 'left';


            td1.innerHTML = name;
            td1.append(btn);
            row.appendChild(td1);

            var td = document.createElement("td");
            td.style.width = '47%';

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm p-0 naarChildren');
            btn.setAttribute('data-id', "C"+id);
            btn.setAttribute('onclick', 'getPID(this)');

            btn.innerHTML= `<span class="material-icons-outlined pb-0">loop</span>`;
            btn.style.borderRight = 'none';
            btn.style.marginLeft = '2%';
            btn.style.marginRight = '1%';
            btn.style.float= 'right';

            td.innerHTML = parent_id;
            td.appendChild(btn);

            row.appendChild(td);
            $('#tblnavitemfirstone').append(row);
            $('#R'+id).css('width','100%');

            var navItemsTable = document.getElementById('table3');
            var row1 = navItemsTable.insertRow();
            row1.setAttribute("class", "d-flex rowNavItemToDelete");
            row1.setAttribute("id", "R "+id);
            row1.setAttribute("onclick", 'getIdNavBarItem(this.id)');

            var cell3 = row1.insertCell(0);
            var cell4 = row1.insertCell(1);
            
            cell3.style.width = '47.3%'
            cell4.style.width = '47%'

            cell3.innerHTML = name;
            cell4.innerHTML = parent_id;

            document.getElementById('nameNav').value = "";
            document.getElementById('sOrder').value = "";
        }
    });
});


$(document).on('submit','#addDisciplineForm',function(e){
    e.preventDefault();

    $.ajax({
        method:"POST",
        url: "..//AdminNavbar/addDiscipline",
        data:$(this).serialize(),
        success: function(data){
            var discipline = document.getElementById('nameOfDiscipline').value;
            document.getElementById("modal_content_toegevoegd").innerHTML = discipline + " is toegevoegd.";
            $("#modal_alert_toegevoegd").modal('show');
            $("#DisciplineToevoegenModal").modal('hide');
            var json = JSON.parse(data);
            var id = json[0].id;
            var discipline = json[0].discipline;
            var available = json[0].available;
            if(available == 0)
            {
                available = "Nee"
            }
            else
            {
                available = "Ja"
            }
            var tblDisciplines = document.getElementById('tblDisciplineFirstOne');
            var row = tblDisciplines.insertRow();
            row.setAttribute("class", "d-flex rowDisciplineFirstOne");
            row.setAttribute("id", "L "+id);
            row.setAttribute('onclick', 'sendAjaxToGetLinkedItems()');

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm p-0 naarRoles');
            btn.setAttribute('id', "L "+id);
            btn.setAttribute('onclick', 'getIdDiscipline(this.id)');

            btn.innerHTML= `<span class="material-icons-outlined pb-0">expand_less</span>`;
            btn.style.borderRight = 'none';
            btn.style.marginLeft = '1%';
            btn.style.marginRight = '2%';
            btn.style.float= 'left'; 
            row.appendChild(btn);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);


            var tblDisciplineToDelete = document.getElementById('tblDisciplineToDelete');
            var row1 = tblDisciplineToDelete.insertRow();
            row1.setAttribute("class", "d-flex rowDisciplineToDelete");
            row1.setAttribute("id", "L "+id);
            row1.setAttribute("onclick", 'getIdDiscipline(this.id)');


            var cell3 = row1.insertCell(0);
            for(x = 1; x < 1000; x++)
            {
                cell1.setAttribute("id", "cell1"+x);
                cell2.setAttribute("id", "cell2"+x);
                $('#cell1'+x).css('width','55%');
                $('#cell2'+x).css('width','45%');
                cell1.innerHTML = discipline;
                cell2.innerHTML = available;

                cell3.setAttribute("id", "cell3"+id);
                $('#cell3'+id).css('width','100%');
                cell3.innerHTML = discipline;
            }

            document.getElementById('nameOfDiscipline').value = "";
        }
    });
});

$(document).on('submit','#addDisciplineForm2',function(e){
    e.preventDefault();

    $.ajax({
        method:"POST",
        url: "..//AdminNavbar/addDiscipline",
        data:$(this).serialize(),
        success: function(data){
            var discipline = document.getElementById('nameOfDiscipline2').value;
            document.getElementById("modal_content_toegevoegd").innerHTML = discipline + " is toegevoegd.";
            $("#modal_alert_toegevoegd").modal('show');
            $("#DisciplineToevoegenModal").modal('hide');
            var json = JSON.parse(data);
            var id = json[0].id;
            var discipline = json[0].discipline;
            
            var tblDisciplineSecondOne = document.getElementById('tblDisciplineSecondOne');
            var row = tblDisciplineSecondOne.insertRow();
            row.setAttribute("class", "rowDiscipline");
            row.setAttribute('onclick', 'addOrUnlinkDisciplines(this)');
            row.setAttribute("id", id);

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
            btn.setAttribute('id', 'naarNavigatie');
            btn.setAttribute('data-disciplineID', id);
            btn.setAttribute('onclick', 'getDisciplineID(this)');
            btn.addEventListener("click", showNavBarItems);

            btn.innerHTML= `<span class="material-icons-outlined pb-0">expand_more</span>`;
            btn.style.borderRight = 'none';
            btn.style.float= 'right'; 
            var cell1 = row.insertCell(0);
            row.appendChild(btn);



            var tblDisciplineToDelete = document.getElementById('tblDisciplineToDelete2');
            var row1 = tblDisciplineToDelete.insertRow();
            row1.setAttribute("class", "d-flex rowDisciplineToDelete2 even");
            row1.setAttribute("id", "L "+id);
            row1.setAttribute("onclick", 'getIdDiscipline(this.id)');
            var cell3 = row1.insertCell(0);

            for(x = 1; x < 1000; x++)
            {
                cell1.setAttribute("id", "cell1"+x);
                $('#cell1'+x).css('width','100%');
                cell3.setAttribute("id", "cell3"+x);
                $('#cell3'+x).css('width','100%');
                cell1.innerHTML = discipline;
                cell3.innerHTML = discipline;
            }

            document.getElementById('nameOfDiscipline2').value = "";
            $("#DisciplineToevoegenModal2").modal('hide');
        }
    });
});

$(document).on('submit','#addRoleForm',function(e){
    e.preventDefault();

    $.ajax({
        method:"POST",
        url: "..//AdminNavbar/addRole",
        data:$(this).serialize(),
        success: function(data){
            var Role = document.getElementById('nameOfRole').value;
            document.getElementById("modal_content_toegevoegd").innerHTML = Role + " is toegevoegd.";
            var json = JSON.parse(data);
            var id = json[0].id;
            var companyID = json[0].companyID;
            var role = json[0].role;
            
            var tblRoleFirstOne = document.getElementById('tblRoleFirstOne');
            var row = tblRoleFirstOne.insertRow();
            row.setAttribute("id", "Role"+id);
            row.setAttribute("class", "rowRole");
            row.setAttribute('onclick', 'selectRoles(this)');

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
            btn.setAttribute('id', 'naarUsers');
            btn.setAttribute('data-rolesID', id);
            btn.setAttribute("onclick","getRoleID(this)");
            btn.addEventListener("click", showUsers);

            btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_less</span>`;
            btn.style.borderRight = 'none';
            btn.style.float= 'left';
            btn.style.marginLeft = '1%';
            btn.style.marginRight = '2%';
            row.appendChild(btn);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);



            var tblRoleToDelete = document.getElementById('tblRoleToDelete');
            var row1 = tblRoleToDelete.insertRow();
            row1.setAttribute("class", "d-flex rowRoleToDelete");
            row1.setAttribute("id", id);
            row1.setAttribute("onclick", 'selectRoleID(this.id)');
            var cell3 = row1.insertCell(0);
            cell3.style.border = 'none';
            for(x = 1; x < 1000; x++)
            {
                cell1.setAttribute("id", "cell1"+x);
                $('#cell1'+x).css('width','50%');
                cell2.setAttribute("id", "cell2"+x);
                $('#cell2'+x).css('width','50%');
                cell1.innerHTML = companyID;
                cell2.innerHTML = role;


                cell3.setAttribute("id", "cell3"+x);
                $('#cell3'+x).css('width','100%');
                cell3.innerHTML = role;
            }

            document.getElementById('nameOfRole').value = "";
            $("#modal_alert_toegevoegd").modal('show');
            $("#RoleToevoegenModal").modal('hide');
        }
    });
});

$(document).on('submit','#addRoleForm2',function(e){
    e.preventDefault();

    $.ajax({
        method:"POST",
        url: "..//AdminNavbar/addRole",
        data:$(this).serialize(),
        success: function(data){
            var Role = document.getElementById('nameOfRole2').value;
            document.getElementById("modal_content_toegevoegd").innerHTML = Role + " is toegevoegd.";
            var json = JSON.parse(data);
            var id = json[0].id;
            var role = json[0].role;
            
            var tblRoles = document.getElementById('tblRoles2');
            var row = tblRoles.insertRow();
            row.setAttribute('data-id', id);
            row.setAttribute('class', 'rowRole2');
            row.setAttribute('onclick', 'addOrUnlinkRoles(this)');

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm p-0');
            btn.setAttribute('id', 'btnNaarDisciplines');
            btn.setAttribute('roleID', id);
            btn.setAttribute('onclick', 'getRoleId(this)');

            
            btn.innerHTML =  `<span class="material-icons-outlined pb-0">expand_more</span>`;
            btn.style.float= 'right'; 
            var cell1 = row.insertCell(0);
            row.appendChild(btn);



            var tblRoleToDelete = document.getElementById('tblRoleToDelete2');
            var row1 = tblRoleToDelete.insertRow();
            row1.setAttribute("class", "d-flex rowRoleToDelete2");
            row1.setAttribute("id", id);
            row1.setAttribute("onclick", 'selectRoleID(this.id)');
            var cell3 = row1.insertCell(0);
            cell3.style.border = 'none';
            for(x = 1; x < 1000; x++)
            {
                cell1.setAttribute("id", "cell1"+x);
                $('#cell1'+x).css('width','100%');
                cell1.innerHTML = role;


                cell3.setAttribute("id", "cell3"+x);
                $('#cell3'+x).css('width','100%');
                cell3.innerHTML = role;
            }

            document.getElementById('nameOfRole2').value = "";
            $("#modal_alert_toegevoegd").modal('show');
            $("#RoleToevoegenModal2").modal('hide');
        }
    });
});

function getRelatedSubsidairy(){

    var selectBox = document.getElementById("Companies");
    var companyID = selectBox.options[selectBox.selectedIndex].value;
    $("#CompanyToDelete").hide();
    $("#SubsidiaryToDelete").hide();
    $('.subsidiaries').find('option').remove();
    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getRelatedSubsidairies",
        data: { companyID : companyID },
        success: function(data){
            var json = JSON.parse(data);
            var subString = "";

            for(x = 0; x < json.length; x++)
            {
                subString += "<option>"+ json[x]['subsidiaryName'] +"</option>" 
            }

            $("#Subsidiaries").append(subString);
            $('.subsidiaries').selectpicker("refresh");
            $('.companies').selectpicker("refresh");

        }
    });

}

$(document).on('submit','#addUserForm',function(e){
    e.preventDefault();

    $.ajax({
        method:"POST",
        url: "..//AdminNavbar/addUser",
        data:$(this).serialize(),
        success: function(data){
            var Voornaam = document.getElementById('Voornaam').value;
            var Achternaam = document.getElementById('Achternaam').value;
            document.getElementById("modal_content_toegevoegd").innerHTML =  Voornaam+" "+ Achternaam + " is toegevoegd.";
            var json = JSON.parse(data);
            var id = json[0].id;
            var contactSalutation = json[0].contactSalutation;
            var contactFirstname = json[0].contactFirstname;
            var contactLastname = json[0].contactSurname;
            
            var tblUsers = document.getElementById('tblUsers');
            var row = tblUsers.insertRow();
            row.setAttribute('class', 'rowUser');
            row.setAttribute('onclick', 'selectUsers(this)');
            row.setAttribute('id', id);
            row.setAttribute('userID', id);



            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);



            var tblUsersToDelete = document.getElementById('tblUserToDelete');
            var row1 = tblUsersToDelete.insertRow();
            row1.setAttribute('class', 'd-flex rowUserToDelete');
            row1.setAttribute('id', id);
            row1.setAttribute('onclick', 'getUserId(this)');
            var cell3 = row1.insertCell(0);
            cell3.style.border = 'none';
            for(x = 1; x < 1000; x++)
            {
                cell1.innerHTML = contactSalutation;
                cell2.innerHTML = contactFirstname + " " + contactLastname;


                cell3.setAttribute("id", "cell3"+x);
                $('#cell3'+x).css('width','100%');
                cell3.innerHTML = contactFirstname + " " + contactLastname;
            }

            document.getElementById('Voornaam').value = "";
            document.getElementById('Initialen').value = "";
            document.getElementById('Achternaam').value = "";
            document.getElementById('Aanhef').value = "";
            document.getElementById('Email').value = "";
            document.getElementById('Telefoonnummer').value = "";
            document.getElementById('Companies').value = "";
            document.getElementById('Subsidiaries').value = "";

            $("#modal_alert_toegevoegd").modal('show');
            $("#UserToevoegenModal").modal('hide');

        }
    });
});

function showViews(e){
    tblViews = $('#tblViews').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        },
    });

    tblNavItems = $('#tblNavItems').DataTable({
        retrieve: true,
        bSort: false,
        info: false,
        filter: false,
        autoWidth: false,
        scrollY: "500px",
        scrollX: false,
        scrollCollapse: true,
        scroller: true,
        deferRender: true,
        paging: false,
        language: {
            url: $("#url").val() + "Libs/DatatableLangDutch.json",
        },
        fnDrawCallback : function() {
            if ($(this).find('.dataTables_empty').length == 1) {
               $('.dataTables_empty').hide();
            }
        },
    });

    tblViews.clear().draw(false);
    tblNavItems.clear().draw(false);

    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getViews",
        success : function (data){
            var json = JSON.parse(data);

            $("#SixthCardBody").removeClass('hidden');
            $("#FourthCardBody").addClass('hidden');  


            for(x = 0; x < json['AllViews'].length; x++){

                var tr = document.createElement("tr");
                tr.setAttribute('data-viewID', json['AllViews'][x]['viewID']);
                tr.setAttribute('class', 'rowView');

                var td = document.createElement("td");
                td.innerHTML = json['AllViews'][x]['view'];
                tr.append(td);

                $('#tblViews').append(tr);

            }

            for(x = 0; x < json['AllNavItems'].length; x++){

                var tr = document.createElement("tr");
                tr.setAttribute('data-navItemID', json['AllNavItems'][x]['id']);
                tr.setAttribute('class', 'rowNavItem');

                var td = document.createElement("td");
                td.style.borderRight= 'none';
                td.innerHTML = json['AllNavItems'][x]['name'];
                tr.append(td);

                var btn = document.createElement("button");
                btn.setAttribute('class', 'btn btn-primary showPlans btn-sm p-0');
                btn.innerHTML =  `<span class="material-icons-outlined pb-0"> chevron_right </span>`;
                btn.style.float= 'right';

                var td = document.createElement("td");
                td.style.width = '0%';
                td.appendChild(btn);
                tr.append(td);

                $('#tblNavItems').append(tr);

            }
            
            $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
        }
    });
    e.stopPropagation();

};

$(document).on("click", ".rowNavItem", function() { 
    rowView = document.querySelector(".rowView.selected")
    if(rowView !== null)
    {
        var selectedRow = $(this).attr('class');

        if(selectedRow !== 'rowNavItem selected')
        {
            viewID = rowView.getAttribute('data-viewID')
            navItemID = $(this).attr('data-navItemID');
            $.ajax({
                method: "POST",
                type: "POST",
                dataType: "html",
                url:"..//AdminNavbar/addToView",
                data: { viewID : viewID, navItemID : navItemID },
                success: function(){
                    var row = document.querySelector(`[data-navItemID='`+navItemID +`']`);
                    $(row).addClass('selected');        
                }
            });
        }
        else
        {
            viewID = rowView.getAttribute('data-viewID')
            navItemID = $(this).attr('data-navItemID');
            $.ajax({
                method: "POST",
                type: "POST",
                dataType: "html",
                url:"..//AdminNavbar/removeFromView",
                data: { viewID : viewID, navItemID : navItemID },
                success: function(){
                    var row = document.querySelector(`[data-navItemID='`+navItemID +`']`);
                    $(row).removeClass('selected');        
        
                }
            });
        }
    }
    else
    {
        $("#modal_alert").modal('show');
        document.getElementById("modal_content").innerHTML = "Selecteer eerst een View.";
    }
});

$(document).on("click", ".rowView", function() { 
    $('.rowView ').removeClass("selected");
    $('.rowNavItem').removeClass("selected");
    $(this).addClass("selected");

    selectedRow = document.querySelector(".rowView.selected")

    viewID = selectedRow.getAttribute('data-viewID')
    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url:"..//AdminNavbar/getNavItems",
        data: { viewID : viewID },
        success: function(data){
            var json = JSON.parse(data);

            for(x = 0; x < json.length; x++)
            {
                var row = document.querySelector(`[data-navItemID='`+json[x]['navItemID'] +`']`);
                $(row).addClass("selected");
            }

        }
    });

});