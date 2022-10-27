import { sendAjax, showError, nanobar } from "./Main.js";

var companyID;
var subsidiaryID;
var onclick;
var tblCompany;
var tblContact;
var tblSubsidiary;
var height = getHeight();

function getHeight() {
    var cardBodyHeight = $("#companyTableCardBody").height();
    var tableHeight = cardBodyHeight - 100;

    return tableHeight;
}

$(window).resize(function () {
    var height = getHeight();
    $(".dataTables_scrollBody").css("max-height", height);
});
tblCompany = $('#tblCompany').DataTable({
    retrieve:true,
    bSort: true,
    info: false,
    filter: true,
    autoWidth: false,
    scrollY: height,
    scrollCollapse: true,
    scroller: true,
    deferRender: false,
    paging: false,
    dom: 'Bfrtip',
    buttons: {
        buttons: [
            {
                text: '<span class="material-icons-outlined pb-0">add</span>',
                className: 'btn btn-primary btn-sm btnAddCompany',
                action: function (e, dt, node, config) {
                    $("#modalAddCompany").modal('show');
                },

            },
        ],
        dom: {
            button: {
                tag: "button",
                className: "btn btn-primary btn-sm",
            },
        },
    },
    columnDefs: [
        {
            targets: 0,
            width: "1%",
            orderable: false,
        }
    ],

});

$(document).on("click", ".rowCompany", function () {
    if (onclick !== 1) {

        
        tblSubsidiary = $('#tblSubsidiary').DataTable({
            retrieve:true,
            bSort: true,
            info: false,
            filter: true,
            autoWidth: false,
            scrollY: false,
            scrollCollapse: false,
            scroller: false,
            deferRender: false,
            paging: false,
            dom: 'Bfrtip',
            buttons: {
                buttons: [
                    {
                        text: '<span class="material-icons-outlined pb-0">add</span>',
                        action: function (e, dt, node, config) {
                            $("#modalAddSubsidiary").modal('show');
                        },
                        className: 'btn btn-primary btn-sm btnAddSubsidiary',
                    },
                ],
                dom: {
                    button: {
                        tag: "button",
                        className: "btn btn-primary btn-sm",
                    },
                },
            },

        });
        companyID = this.getAttribute("data-companyID");
        sessionStorage.setItem("companyID", companyID);
            $('.rowCompany').removeClass("selected");

            $('.rowSubsidiary').removeClass("related");

            $('.rowSubsidiary').removeClass("notRelated");

        sessionStorage.setItem("companyShown", "No");

        $(this).addClass("selected");

        $('#hideSub').css( 'display', 'block' );
        $("#tblSubsidiaryTitle").css( 'display', 'block' );
        var el = document.getElementById('colSubsidiary');
        el.style.float = 'left';
        el.style.display = 'block';

        var tblSubsidiaryTitle = $('#tblSubsidiaryTitle');
        var tr = $(this);
        var companyName = tr[0].cells[1].innerText;
        sessionStorage.setItem("companyName", companyName);
        tblSubsidiaryTitle[0].innerHTML = `<p id='companyNameTitle'>` + companyName + `</p>`;
        $("#colCompany").css( 'display', 'none' );

        
        $.ajax({
            method: "POST",
            type: "POST",
            dataType: "html",
            url: "..//ClientInfoManagementTool/getRelatedSubsidiaries",
            data: { companyID: companyID },
            success: function (data) {

                var json = JSON.parse(data)
                for (var i = 0; i < json['relatedSubs'].length; i++) {
                    var row = document.querySelector(`[data-subsidiaryID='` + json['relatedSubs'][i]['Subsidiary_ID'] + `']`);
                    $(row).addClass("related");
                    $(row).removeClass("selected");
                }
                var tblSubsidiary = document.getElementById("tblSubsidiary");

                for (var x = 0; x < tblSubsidiary.rows.length; x++) {
                    var row = tblSubsidiary.rows[x];
                    var className = row.getAttribute("class");
                    if (className !== "rowSubsidiary odd related" && className !== "rowSubsidiary even related") {
                        $(row).addClass("hidden");
                    }
                }
                $($.fn.dataTable.tables(true)).DataTable()
                .columns.adjust();
            }
        });
    }

});
$(document).on("click", "#companyNameTitle", function () {

    $('#colCompany').css( 'display', 'block' );
    $('#colSubsidiary').css( 'display', 'none' );
    tblSubsidiary = document.getElementById("tblSubsidiary");
    for (var x = 0; x < tblSubsidiary.rows.length; x++) {
        $(tblSubsidiary.rows[x]).removeClass("hidden");
    }

        sessionStorage.setItem("companyShown", "Yes");
    $($.fn.dataTable.tables(true)).DataTable()
    .columns.adjust();
});

$(document).ready(function () {

    if (sessionStorage.getItem("companyShown") == "No") {
        var companyID = sessionStorage.getItem("companyID");
        if (companyID !== null) {
            var subsidiaryID = sessionStorage.getItem("subsidiaryID");
            if (subsidiaryID !== null && subsidiaryID !== "null") {
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url: "..//ClientInfoManagementTool/getRelatedContacts",
                    data: { subsidiaryID: subsidiaryID },
                    success: function (data) {
                        var el = document.getElementById('colContact');
                        el.style.display = 'block';
                        el.style.float = 'left';
                        $('#hideCon').css("display","block")
                        var fullTitle = sessionStorage.getItem("fullTitle");
                        var tblContactTitle = $('#tblContactTitle');
                        var subsidiaryName = sessionStorage.getItem("subsidiaryName");
                        tblContactTitle[0].innerHTML = `<a id='companyNameTitle2'>` + fullTitle + `</a>` + " | " + `<a id='subsidiaryNameTitle'>` + subsidiaryName + `</a>`;
                        var el = document.getElementById('colCompany');
                        el.style.display = 'none';
                        var el = document.getElementById('colSubsidiary');
                        el.style.display = 'none';

                        var json = JSON.parse(data)
                        for (var i = 0; i < json.length; i++) {
                            var row = document.querySelector(`[data-contactID='` + json[i]['Contact_ID'] + `']`);
                            $(row).addClass("related");
                        }
                        var tblContact = document.getElementById("tblContact");

                        for (var x = 0; x < tblContact.rows.length; x++) {
                            var row = tblContact.rows[x];
                            var className = row.getAttribute("class");
                            if (className !== "rowContact odd related" && className !== "rowContact even related") {
                                $(row).addClass("notRelated");
                            }
                        }
                        $($.fn.dataTable.tables(true)).DataTable()
                        .columns.adjust();
                    }
                })
            }
            else {
                tblSubsidiary = $('#tblSubsidiary').DataTable({
                    retrieve:true,
                    bSort: true,
                    info: false,
                    filter: true,
                    autoWidth: false,
                    scrollY: false,
                    scrollCollapse: false,
                    scroller: false,
                    deferRender: false,
                    paging: false,
                    dom: 'Bfrtip',
                    buttons: {
                        buttons: [
                            {
                                text: '<span class="material-icons-outlined pb-0">add</span>',
                                action: function (e, dt, node, config) {
                                    $("#modalAddSubsidiary").modal('show');
                                },
                                className: 'btn btn-primary btn-sm btnAddSubsidiary',
                            },
                        ],
                        dom: {
                            button: {
                                tag: "button",
                                className: "btn btn-primary btn-sm",
                            },
                        },
                    },
        
                });

                var el = document.getElementById('colContact');
                el.style.display = 'none';
                $('#hideSub').css("display","block");
                $("#tblSubsidiaryTitle").css( 'display', 'block' );
                var el = document.getElementById('colSubsidiary');
                el.style.display = 'block';
                el.style.float = 'left';

                var tblSubsidiaryTitle = $('#tblSubsidiaryTitle');
                var companyName = sessionStorage.getItem("companyName");
                tblSubsidiaryTitle[0].innerHTML = `<p id='companyNameTitle'>` + companyName + `</p>`;
                var el = document.getElementById('colCompany');
                el.style.display = 'none';
                $.ajax({
                    method: "POST",
                    type: "POST",
                    dataType: "html",
                    url: "..//ClientInfoManagementTool/getRelatedSubsidiaries",
                    data: { companyID: companyID },
                    success: function (data) {

                        var json = JSON.parse(data)
                        for (var i = 0; i < json['relatedSubs'].length; i++) {
                            var row = document.querySelector(`[data-subsidiaryID='` + json['relatedSubs'][i]['Subsidiary_ID'] + `']`);
                            $(row).addClass("related");
                            $(row).removeClass("selected");
                        }
                        var tblSubsidiary = document.getElementById("tblSubsidiary");

                        for (var x = 0; x < tblSubsidiary.rows.length; x++) {
                            var row = tblSubsidiary.rows[x];
                            var className = row.getAttribute("class");
                            if (className !== "rowSubsidiary odd related" && className !== "rowSubsidiary even related") {
                                $(row).addClass("notRelated");
                            }
                        }
                        $($.fn.dataTable.tables(true)).DataTable()
                        .columns.adjust();
                    }
                });
            }
        }
    }
    else{
        $('#tblSubsidiary').wrap('<div id="hideSub" style="display:none"/>');
        $('#tblContact').wrap('<div id="hideCon" style="display:none"/>');
        $("#tblSubsidiaryTitle").addClass('hidden');
        $("#tblContactTitle").addClass('hidden');
    }
});

$(document).on("click", ".rowSubsidiary", function () {
    if (onclick !== 1) {
        
tblContact = $('#tblContact').DataTable({
    retrieve:true,
    bSort: true,
    info: false,
    filter: true,
    autoWidth: false,
    scrollY: "200px",
    scrollX: false,
    scrollCollapse: true,
    scroller: true,
    deferRender: false,
    paging: false,
    dom: 'Bfrtip',
    buttons: {
        buttons: [
            {
                text: '<span class="material-icons-outlined pb-0">add</span>',
                action: function (e, dt, node, config) {
                    $("#modalAddContact").modal('show');
                },
                className: 'btn btn-primary btn-sm btnAddContact',
            },
        ],
        dom: {
            button: {
                tag: "button",
                className: "btn btn-primary btn-sm",
            },
        },
    },
    columnDefs: [
        {
            targets: 0,
            width: "1%",
            orderable: false,
        }
    ],
});

        subsidiaryID = this.getAttribute("data-subsidiaryID")
        sessionStorage.setItem("subsidiaryID", subsidiaryID);

        $('.rowSubsidiary').removeClass("selected");
        $('.rowContact').removeClass("related");
        $('.rowContact').removeClass("notRelated");

        $(this).addClass("selected");
        sessionStorage.setItem("companyShown", "No");
        $.ajax({
            method: "POST",
            type: "POST",
            dataType: "html",
            url: "..//ClientInfoManagementTool/getRelatedContacts",
            data: { subsidiaryID: subsidiaryID },
            success: function (data) {
                $('#hideCon').css( 'display', 'block' );
                $("#tblContactTitle").removeClass('hidden');
                var el = document.getElementById('colContact');
                el.style.float = 'left';
                el.style.display = 'block';


                var id = subsidiaryID;
                var tblSubsidiaryTitle = $('#tblSubsidiaryTitle');
                var fullTitle = tblSubsidiaryTitle[0].innerText;
                sessionStorage.setItem("fullTitle", fullTitle);
                var tblContactTitle = $('#tblContactTitle');
                var tr = document.querySelector(`[data-subsidiaryID='` + id + `']`);
                var subsidiaryName = tr.cells[1].innerText;
                sessionStorage.setItem("subsidiaryName", subsidiaryName);
                tblContactTitle[0].innerHTML = `<a id='companyNameTitle2'>` + fullTitle + `</a>` + " | " + `<a id='subsidiaryNameTitle'>` + subsidiaryName + `</a>`;
                var el = document.getElementById('colSubsidiary');
                el.style.display = 'none';

                var json = JSON.parse(data)
                for (var i = 0; i < json.length; i++) {
                    var row = document.querySelector(`[data-contactID='` + json[i]['Contact_ID'] + `']`);
                    $(row).addClass("related");
                }
                var tblContact = document.getElementById("tblContact");

                for (var x = 0; x < tblContact.rows.length; x++) {
                    var row = tblContact.rows[x];
                    var className = row.getAttribute("class");
                    if (className !== "rowContact odd related" && className !== "rowContact even related") {
                        $(row).addClass("notRelated");
                    }
                }
                $($.fn.dataTable.tables(true)).DataTable()
                .columns.adjust();
            }
        });
    }
});
$(document).on("click", "#companyNameTitle2", function () {
    var el = document.getElementById('colContact');
    el.style.display = 'none';
    var el = document.getElementById('colCompany');
    el.style.display = 'block';
    sessionStorage.setItem("companyShown", "Yes");
    $($.fn.dataTable.tables(true)).DataTable()
    .columns.adjust();
});
$(document).on("click", "#subsidiaryNameTitle", function () {

    var el = document.getElementById('colContact');
    el.style.display = 'none';
    var el = document.getElementById('colSubsidiary');
    el.style.display = 'block';
    el.style.float = 'left';

    var tblSubsidiaryTitle = $('#tblSubsidiaryTitle');
    var companyName = sessionStorage.getItem("companyName");
    tblSubsidiaryTitle[0].innerHTML = `<p id='companyNameTitle'>` + companyName + `</p>`;
    var el = document.getElementById('colCompany');
    el.style.display = 'none';

    sessionStorage.setItem("subsidiaryID", "null");
    $.ajax({
        method: "POST",
        type: "POST",
        dataType: "html",
        url: "..//ClientInfoManagementTool/getRelatedSubsidiaries",
        data: { companyID: companyID },
        success: function (data) {

            var json = JSON.parse(data)
            for (var i = 0; i < json['relatedSubs'].length; i++) {
                var row = document.querySelector(`[data-subsidiaryID='` + json['relatedSubs'][i]['Subsidiary_ID'] + `']`);
                $(row).addClass("related");
                $(row).removeClass("selected");
            }
            var tblSubsidiary = document.getElementById("tblSubsidiary");

            for (var x = 0; x < tblSubsidiary.rows.length; x++) {
                var row = tblSubsidiary.rows[x];
                var className = row.getAttribute("class");
                if (className !== "rowSubsidiary odd related" && className !== "rowSubsidiary even related") {
                    $(row).addClass("notRelated");
                }
            }
        }
    });
});

$(document).on('submit', '#frmAddContact', function (e) {
    e.preventDefault();

    var ContactTitle;
    var ele = document.getElementsByName('ContactTitle');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            ContactTitle = ele[i].value;
        }
    }

    var Gender;
    var ele = document.getElementsByName('Gender');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            Gender = ele[i].value;
        }
    }


    var FirstName = $("#txbFirstName").val();
    var LastName = $("#txbLastName").val();
    var Initials = $("#txbInitials").val();
    var PhoneNumber = $("#txbPhoneNumber").val();
    var Email = $("#txbContactEmail").val();



    var formData = new FormData();
    formData.append("ajaxAction", "createContact_CIMT");
    formData.append('subsidiaryID', subsidiaryID)
    formData.append('FirstName', FirstName)
    formData.append('LastName', LastName)
    formData.append('Initials', Initials)
    formData.append('ContactTitle', ContactTitle)
    formData.append('Gender', Gender)
    formData.append('PhoneNumber', PhoneNumber)
    formData.append('Email', Email)


    sendAjax(formData, (data) => {
        try {
            var json = JSON.parse(data);

            var tr = document.createElement("tr");
            tr.setAttribute('class', 'rowContact');
            tr.setAttribute('data-contactID', json[0]['KIS_Contact_ID']);

            var td = document.createElement("td");

            var div = document.createElement("div");
            div.setAttribute('class', 'btn-group btn-group-sm');

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm modifyRowContact');
            btn.innerHTML = `<i class='fas fa-pen' aria-hidden='true'>`;
            div.append(btn);

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-danger btn-sm deleteRowContact');
            btn.innerHTML = `<i class='fas fa-times' aria-hidden='true'>`;
            div.append(btn);


            td.append(div);
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '405px');
            td.innerHTML = json[0]['KIS_Contact_Title'] + " " + json[0]['KIS_Contact_Name'];
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '405px');
            td.innerHTML = json[0]['KIS_Contact_PhoneNumber'];
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '600px');
            td.innerHTML = json[0]['KIS_Contact_EmailAddress'];
            tr.append(td);

            $('#tblContact').append(tr);
            $("#modalAddContact").modal('hide');
            showError("success", "success", ContactTitle + " " + LastName + ', ' + FirstName + " has been added successfully!")

        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on('submit', '#frmAddSubsidiary', function (e) {
    e.preventDefault();

    var Name = $("#txbName").val();
    var PostalAddress = $("#txbPostalAddress").val();
    var PostalPostcode = $("#txbPostalPostcode").val();
    var PostalTown = $("#txbPostalTown").val();
    var PostalCountry = $("#txbPostalCountry").val();
    var VisitingAddress = $("#txbVisitingAddress").val();
    var VisitingPostcode = $("#txbVisitingPostcode").val();
    var VisitingTown = $("#txbVisitingTown").val();
    var VisitingCountry = $("#txbVisitingCountry").val();
    var TelephoneNumber = $("#txbTelephoneNumber").val();
    var FaxNumber = $("#txbFaxNumber").val();
    var Email = $("#txbSubsidiaryEmail").val();
    var CompanyStructure = $("#txbCompanyStructure").val();
    var CompanyType = $("#txbCompanyType").val();
    var TeamCompletion = $("#txbTeamCompletion").val();


    var formData = new FormData();
    formData.append("ajaxAction", "createSubsidiary_CIMT");
    formData.append('companyID', companyID)
    formData.append('Name', Name)
    formData.append('PostalAddress', PostalAddress)
    formData.append('PostalPostcode', PostalPostcode)
    formData.append('PostalTown', PostalTown)
    formData.append('PostalCountry', PostalCountry)
    formData.append('VisitingAddress', VisitingAddress)
    formData.append('VisitingPostcode', VisitingPostcode)
    formData.append('VisitingTown', VisitingTown)
    formData.append('VisitingCountry', VisitingCountry)
    formData.append('TelephoneNumber', TelephoneNumber)
    formData.append('FaxNumber', FaxNumber)
    formData.append('Email', Email)
    formData.append('CompanyStructure', CompanyStructure)
    formData.append('CompanyType', CompanyType)
    formData.append('TeamCompletion', TeamCompletion)


    sendAjax(formData, (data) => {
        try {
            var json = JSON.parse(data);

            var tr = document.createElement("tr");
            tr.setAttribute('class', 'rowSubsidiary');
            tr.setAttribute('data-subsidiaryID', json[0]['KIS_Subsidiary_ID']);

            var td = document.createElement("td");

            var div = document.createElement("div");
            div.setAttribute('class', 'btn-group btn-group-sm');

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm modifyRowSubsidiary');
            btn.innerHTML = `<i class='fas fa-pen' aria-hidden='true'>`;
            div.append(btn);

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-danger btn-sm deleteRowSubsidiary');
            btn.innerHTML = `<i class='fas fa-times' aria-hidden='true'>`;
            div.append(btn);


            td.append(div);
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '160px');
            td.innerHTML = json[0]['KIS_Subsidiary_Name'];
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '300px');
            td.innerHTML = json[0]['KIS_Subsidiary_VisitingAddress'] + "" + json[0]['KIS_Subsidiary_VisitingTown'];
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '100px');
            td.innerHTML = json[0]['KIS_Subsidiary_VisitingPostCode'];
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '150px');
            td.innerHTML = json[0]['KIS_Subsidiary_TelephoneNumber'];
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '330px');
            td.innerHTML = json[0]['KIS_Subsidiary_GeneralEmailAddress'];
            tr.append(td);

            $('#tblSubsidiary').append(tr);
            $("#modalAddSubsidiary").modal('hide');
            showError("success", "success", Name + " has been added successfully!")
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on('submit', '#frmAddCompany', function (e) {
    e.preventDefault();

    var Name = $("#txbCompanyName").val();
    var CustomerID = $("#txbCompanyCustomerID").val();
    var CreditorID = $("#txbCompanyCreditorID").val();

    var formData = new FormData();
    formData.append("ajaxAction", "createCompany_CIMT");
    formData.append('Name', Name)
    formData.append('CustomerID', CustomerID)
    formData.append('CreditorID', CreditorID)



    sendAjax(formData, (data) => {
        try {
            var json = JSON.parse(data);

            var tr = document.createElement("tr");
            tr.setAttribute('class', 'rowCompany');
            tr.setAttribute('data-companyID', json[0]['KIS_Company_ID']);

            var td = document.createElement("td");

            var div = document.createElement("div");
            div.setAttribute('class', 'btn-group btn-group-sm');

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-primary btn-sm modifyRowCompany');
            btn.innerHTML = `<i class='fas fa-pen' aria-hidden='true'>`;
            div.append(btn);

            var btn = document.createElement("button");
            btn.setAttribute('class', 'btn btn-danger btn-sm deleteRowCompany');
            btn.innerHTML = `<i class='fas fa-times' aria-hidden='true'>`;
            div.append(btn);


            td.append(div);
            tr.append(td);

            var td = document.createElement("td");
            td.setAttribute('width', '100%');
            td.innerHTML = json[0]['KIS_Company_Name'];
            tr.append(td);

            $('#tblCompany').append(tr);
            $("#modalAddCompany").modal('hide');
            showError("success", "success", Name + " has been added successfully!")
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on("click", ".deleteRowCompany", function () {
    onclick = 1;
    var tr = $(this).closest("tr");
    var companyID = tr[0].attributes[1].value;
    var companyName = tr[0].innerText;
    var formData = new FormData();
    formData.append("ajaxAction", "deactivateCompany_CIMT");
    formData.append('companyID', companyID)



    sendAjax(formData, () => {
        try {
            onclick = 0;
            showError("success", "success", companyName + " has been deleted successfully!")
            window.location.reload();
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on("click", ".deleteRowSubsidiary", function () {
    onclick = 1;
    var tr = $(this).closest("tr");
    var subsidiaryID = tr[0].attributes[1].value;
    var subsidiaryName = tr[0].cells[0].innerText;
    var formData = new FormData();
    formData.append("ajaxAction", "deactivateSubsidiary_CIMT");
    formData.append('subsidiaryID', subsidiaryID)



    sendAjax(formData, () => {
        try {
            onclick = 0;
            showError("success", "success", subsidiaryName + " has been deleted successfully!")
            window.location.reload();
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on("click", ".deleteRowContact", function () {
    var tr = $(this).closest("tr");
    var contactID = tr[0].attributes[1].value;
    var contactName = tr[0].cells[0].innerText;
    var formData = new FormData();
    formData.append("ajaxAction", "deactivateContact_CIMT");
    formData.append('contactID', contactID)



    sendAjax(formData, () => {
        try {
            showError("success", "success", contactName + " has been deleted successfully!")
            window.location.reload();
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on("click", ".modifyRowCompany", function () {
    onclick = 1;
    var tr = $(this).closest("tr");
    var companyID = tr[0].attributes[1].value;
    var formData = new FormData();
    formData.append("ajaxAction", "modifyCompany_CIMT");
    formData.append('companyID', companyID)



    sendAjax(formData, (data) => {
        try {
            onclick = 0;
            $("#modalModifyCompany").modal('show');
            var json = JSON.parse(data);
            console.log(json);

            var txbModifyCompanyName = document.getElementById('txbModifyCompanyName');
            txbModifyCompanyName.value = json[0]['KIS_Company_Name'];
            txbModifyCompanyName.attributes[6].value = json[0]['KIS_Company_ID'];
            var txbModifyCompanyCustomerID = document.getElementById('txbModifyCompanyCustomerID');
            txbModifyCompanyCustomerID.value = json[0]['KIS_Company_CustomerID'];
            var txbModifyCompanyCreditorID = document.getElementById('txbModifyCompanyCreditorID');
            txbModifyCompanyCreditorID.value = json[0]['KIS_Company_CreditorID'];
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on('submit', '#frmModifyCompany', function (e) {
    e.preventDefault();

    var companyID = $("#txbModifyCompanyName").attr('data-id');
    var Name = $("#txbModifyCompanyName").val();
    var CustomerID = $("#txbModifyCompanyCustomerID").val();
    var CreditorID = $("#txbModifyCompanyCreditorID").val();

    var formData = new FormData();
    formData.append("ajaxAction", "saveCompany_CIMT");
    formData.append('companyID', companyID)
    formData.append('Name', Name)
    formData.append('CustomerID', CustomerID)
    formData.append('CreditorID', CreditorID)



    sendAjax(formData, () => {
        try {
            var tr = document.querySelector(`[data-companyID='` + companyID + `']`);
            tr.cells[1].innerHTML = Name;
            $("#modalModifyCompany").modal('hide');
            showError("success", "success", Name + " has been modified successfully!")
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on("click", ".modifyRowSubsidiary", function () {
    onclick = 1;
    var tr = $(this).closest("tr");
    var subsidiaryID = tr[0].attributes[1].value;
    var formData = new FormData();
    formData.append("ajaxAction", "modifySubsidiary_CIMT");
    formData.append('subsidiaryID', subsidiaryID)



    sendAjax(formData, (data) => {
        try {
            onclick = 0;
            $("#modalModifySubsidiary").modal('show');
            var json = JSON.parse(data);
            console.log(json);

            var txbModifyName = document.getElementById('txbModifyName');
            txbModifyName.value = json[0]['KIS_Subsidiary_Name'];
            txbModifyName.attributes[7].value = json[0]['KIS_Subsidiary_ID'];
            var txbModifyPostalAddress = document.getElementById('txbModifyPostalAddress');
            txbModifyPostalAddress.value = json[0]['KIS_Subsidiary_PostalAddress'];
            var txbModifyPostalPostcode = document.getElementById('txbModifyPostalPostcode');
            txbModifyPostalPostcode.value = json[0]['KIS_Subsidiary_PostalPostCode'];
            var txbModifyPostalTown = document.getElementById('txbModifyPostalTown');
            txbModifyPostalTown.value = json[0]['KIS_Subsidiary_PostalTown'];
            var txbModifyPostalCountry = document.getElementById('txbModifyPostalCountry');
            txbModifyPostalCountry.value = json[0]['KIS_Subsidiary_PostalCountry'];
            var txbModifyVisitingAddress = document.getElementById('txbModifyVisitingAddress');
            txbModifyVisitingAddress.value = json[0]['KIS_Subsidiary_VisitingAddress'];
            var txbModifyVisitingPostcode = document.getElementById('txbModifyVisitingPostcode');
            txbModifyVisitingPostcode.value = json[0]['KIS_Subsidiary_VisitingPostCode'];

            var txbModifyVisitingTown = document.getElementById('txbModifyVisitingTown');
            txbModifyVisitingTown.value = json[0]['KIS_Subsidiary_VisitingTown'];

            var txbModifyVisitingCountry = document.getElementById('txbModifyVisitingCountry');
            txbModifyVisitingCountry.value = json[0]['KIS_Subsidiary_VisitingCountry'];

            var txbModifyTelephoneNumber = document.getElementById('txbModifyTelephoneNumber');
            txbModifyTelephoneNumber.value = json[0]['KIS_Subsidiary_TelephoneNumber'];

            var txbModifyFaxNumber = document.getElementById('txbModifyFaxNumber');
            txbModifyFaxNumber.value = json[0]['KIS_Subsidiary_FaxNumber'];

            var txbModifySubsidiaryEmail = document.getElementById('txbModifySubsidiaryEmail');
            txbModifySubsidiaryEmail.value = json[0]['KIS_Subsidiary_GeneralEmailAddress'];

            var txbModifyCompanyStructure = document.getElementById('txbModifyCompanyStructure');
            txbModifyCompanyStructure.value = json[0]['KIS_Subsidiary_CompanyStructure'];

            var txbModifyCompanyType = document.getElementById('txbModifyCompanyType');
            txbModifyCompanyType.value = json[0]['KIS_Subsidiary_CompanyType'];


        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});
$(document).on('submit', '#frmModifySubsidiary', function (e) {
    e.preventDefault();

    var subsidiaryID = $("#txbModifyName").attr('data-modifySubsidiaryID');
    var Name = $("#txbModifyName").val();
    var CustomerID = $("#txbModifyCustomerID").val();
    var CreditorID = $("#txbModifyCreditorID").val();

    var PostalAddress = $("#txbModifyPostalAddress").val();
    var PostalPostCode = $("#txbModifyPostalPostcode").val();
    var PostalTown = $("#txbModifyPostalTown").val();
    var PostalCountry = $("#txbModifyPostalCountry").val();

    var VisitingAddress = $("#txbModifyVisitingAddress").val();
    var VisitingPostCode = $("#txbModifyVisitingPostcode").val();
    var VisitingTown = $("#txbModifyVisitingTown").val();
    var VisitingCountry = $("#txbModifyVisitingCountry").val();

    var TelephoneNumber = $("#txbModifyTelephoneNumber").val();
    var GeneralEmailAddress = $("#txbModifySubsidiaryEmail").val();
    var FaxNumber = $("#txbModifyFaxNumber").val();
    var CompanyStructure = $("#txbModifyCompanyStructure").val();
    var CompanyType = $("#txbModifyCompanyType").val();
    var TeamCompletion = $("#txbModifyTeamCompletion").val();

    var formData = new FormData();
    formData.append("ajaxAction", "saveSubsidiary_CIMT");
    formData.append('subsidiaryID', subsidiaryID)
    formData.append('Name', Name)
    formData.append('CustomerID', CustomerID)
    formData.append('CreditorID', CreditorID)

    formData.append('PostalAddress', PostalAddress)
    formData.append('PostalPostCode', PostalPostCode)
    formData.append('PostalTown', PostalTown)
    formData.append('PostalCountry', PostalCountry)

    formData.append('VisitingAddress', VisitingAddress)
    formData.append('VisitingPostCode', VisitingPostCode)
    formData.append('VisitingTown', VisitingTown)
    formData.append('VisitingCountry', VisitingCountry)


    formData.append('TelephoneNumber', TelephoneNumber)
    formData.append('GeneralEmailAddress', GeneralEmailAddress)
    formData.append('FaxNumber', FaxNumber)
    formData.append('CompanyStructure', CompanyStructure)
    formData.append('CompanyType', CompanyType)
    formData.append('TeamCompletion', TeamCompletion)




    sendAjax(formData, () => {
        try {
            var tr = document.querySelector(`[data-subsidiaryID='` + subsidiaryID + `']`);
            tr.cells[1].innerHTML = Name;
            tr.cells[2].innerHTML = VisitingAddress + ', ' + VisitingTown;
            tr.cells[3].innerHTML = VisitingPostCode;
            tr.cells[4].innerHTML = TelephoneNumber;
            tr.cells[5].innerHTML = GeneralEmailAddress;



            $("#modalModifySubsidiary").modal('hide');
            showError("success", "success", Name + " has been modified successfully!")
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});

$(document).on("click", ".modifyRowContact", function () {
    onclick = 1;
    var tr = $(this).closest("tr");
    var contactID = tr[0].attributes[1].value;
    var formData = new FormData();
    formData.append("ajaxAction", "modifyContact_CIMT");
    formData.append('contactID', contactID)

    sendAjax(formData, (data) => {
        try {
            onclick = 0;
            $("#modalModifyContact").modal('show');
            var json = JSON.parse(data);
            console.log(json);

            var FirstName = document.getElementById('txbModifyFirstName');
            FirstName.value = json[0]['KIS_Contact_FirstName'];
            FirstName.attributes[7].value = json[0]['KIS_Contact_ID'];

            var LastName = document.getElementById('txbModifyLastName');
            LastName.value = json[0]['KIS_Contact_Surname'];

            var Initials = document.getElementById('txbModifyInitials');
            Initials.value = json[0]['KIS_Contact_Initials'];

            var PhoneNumber = document.getElementById('txbModifyPhoneNumber');
            PhoneNumber.value = json[0]['KIS_Contact_PhoneNumber'];

            var Email = document.getElementById('txbModifyContactEmail');
            Email.value = json[0]['KIS_Contact_EmailAddress'];

            var ContactTitle = document.getElementsByName('ModifyContactTitle');
            if (json[0]['KIS_Contact_Title'] == "Dhr.") {
                ContactTitle[0].checked = true;
            } else {
                ContactTitle[1].checked = true;
            }

            var Gender = document.getElementsByName('ModifyGender');
            if (json[0]['KIS_Contact_Gender'] == "M") {
                Gender[0].checked = true;
            } else {
                Gender[1].checked = true;
            }

        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});
$(document).on('submit', '#frmModifyContact', function (e) {
    e.preventDefault();

    var contactID = $("#txbModifyFirstName").attr('data-modifyContactID');
    var ContactTitle;
    var ele = document.getElementsByName('ModifyContactTitle');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            ContactTitle = ele[i].value;
        }
    }

    var Gender;
    var ele = document.getElementsByName('ModifyGender');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            Gender = ele[i].value;
        }
    }


    var FirstName = $("#txbModifyFirstName").val();
    var LastName = $("#txbModifyLastName").val();
    var Initials = $("#txbModifyInitials").val();
    var PhoneNumber = $("#txbModifyPhoneNumber").val();
    var Email = $("#txbModifyContactEmail").val();



    var formData = new FormData();
    formData.append("ajaxAction", "saveContact_CIMT");
    formData.append('contactID', contactID)
    formData.append('FirstName', FirstName)
    formData.append('LastName', LastName)
    formData.append('Initials', Initials)
    formData.append('ContactTitle', ContactTitle)
    formData.append('Gender', Gender)
    formData.append('PhoneNumber', PhoneNumber)
    formData.append('Email', Email)




    sendAjax(formData, () => {
        try {
            var tr = document.querySelector(`[data-contactID='` + contactID + `']`);
            tr.cells[1].innerHTML = ContactTitle + ' ' + LastName + ', ' + FirstName;
            tr.cells[2].innerHTML = PhoneNumber;
            tr.cells[3].innerHTML = Email;
            $("#modalModifyContact").modal('hide');
            showError("success", "success", FirstName + " " + LastName + " has been modified successfully!")
        } catch (e) {
            showError("error", "Error", ":" + e.message);
            console.log(e.stack);
        }
    });
});