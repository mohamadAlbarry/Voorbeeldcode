<?php
if ($this->checkLoggedIn()) {
    $this->checkAutoLogOut();
    $this->updateLoggedInTime($_SESSION["UID"]);
}
include_once "Models/ClientInfoManagementToolModel.php";

?>
<div class="content-box1 content-box2">
    <div class="row h-120 ml-1 mr-1">
        <div class="card pageCards col-12">
        <h3 class="card-header"><span class="material-icons-outlined">source</span><span class="ml-2 pl-2 border-left" style="color:slategray;">Client Information Management Tool</span></h3>
            <div class="card-body" id="companyTableCardBody">
                    <div class="row">
                        <div class="col-sm-12" id="colCompany">
                            <h3 id="tblCompanyTitle" class="sub-header">Company</h3>
                            </br>
                            <table id="tblCompany" class="table table-striped table-hover table-sm dataTable no-footer display nowrap compact" style="font-size:14px; table-layout:auto">
                                <thead>
                                    <tr>
                                        <th class='p-0 m-0'></th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $tblCompany = ClientInfoManagementToolModel::getAllCompanies();
                                    foreach ($tblCompany as $row) {
                                    ?>
                                        <tr class="rowCompany" data-companyID=<?= $row["KIS_Company_ID"]; ?>>
                                            <td >
                                            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-primary py-0 btn-sm modifyRowCompany"><i class='fas fa-pen' aria-hidden='true'></i></button>
                                                <button type="button" class="btn btn-danger py-0 btn-sm deleteRowCompany"><i class='fas fa-times' aria-hidden='true'></i></button>
                                            </div>
                                            </td>
                                            <td><?= $row["KIS_Company_Name"]; ?></td> 
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-sm-12" id="colSubsidiary">
                            <h3 id="tblSubsidiaryTitle" class="sub-header">Subsidiary</h3>
                            </br>
                            <table id="tblSubsidiary" class="table table-striped table-hover table-sm dataTable no-footer display nowrap compact" style="font-size:14px;">
                                <thead>
                                    <tr>
                                    <th class='p-0 m-0'></th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Postcode</th>
                                        <th>Telephone</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $tblSubsidiary = ClientInfoManagementToolModel::getAllSubsidiaries();
                                    foreach ($tblSubsidiary as $row) {
                                    ?>
                                        <tr class="rowSubsidiary" data-subsidiaryID = <?= $row["KIS_Subsidiary_ID"]; ?>>
                                            <td style="width: 10px;">
                                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-primary py-0 btn-sm modifyRowSubsidiary"><i class='fas fa-pen' aria-hidden='true'></i></button>
                                                    <button type="button" class="btn btn-danger py-0 btn-sm deleteRowSubsidiary"><i class='fas fa-times' aria-hidden='true'></i></button>
                                                </div>
                                            </td>
                                            <td>
                                                <?= $row["KIS_Subsidiary_Name"]; ?>
                                            </td>
                                            <td>
                                                <?= $row["KIS_Subsidiary_VisitingAddress"]; ?>, <?= $row["KIS_Subsidiary_VisitingTown"]; ?>
                                            </td>
                                            <td>
                                                <?= $row["KIS_Subsidiary_VisitingPostCode"]; ?>
                                            </td>
                                            <td>
                                                <?= $row["KIS_Subsidiary_TelephoneNumber"]; ?>
                                            </td>
                                            <td>
                                                <?= $row["KIS_Subsidiary_GeneralEmailAddress"]; ?>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-sm-12" id="colContact">
                            <h3 id="tblContactTitle" class="sub-header">Contact</h3>
                            </br>
                            <table id="tblContact" class="table table-striped table-hover table-sm dataTable no-footer display nowrap compact" style="font-size:14px;">
                                <thead>
                                    <tr>
                                        <th class='p-0 m-0'></th>
                                        <th>Name</th>
                                        <th>Phone number</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $tblContact = ClientInfoManagementToolModel::getAllContacts();
                                    foreach ($tblContact as $row) {
                                    ?>
                                        <tr class="rowContact" data-contactID=<?= $row["KIS_Contact_ID"]; ?>>
                                        <td>
                                            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-primary py-0 btn-sm modifyRowContact"><i class='fas fa-pen' aria-hidden='true'></i></button>
                                                <button type="button" class="btn btn-danger py-0 btn-sm deleteRowContact"><i class='fas fa-times' aria-hidden='true'></i></button>
                                            </div>
                                        </td>
                                        <td>
                                        <?= $row["KIS_Contact_Title"]; ?> <?= $row["KIS_Contact_Name"]; ?>
                                        </td>
                                        <td>
                                        <?= $row["KIS_Contact_PhoneNumber"]; ?>
                                        </td>
                                        <td>
                                        <?= $row["KIS_Contact_EmailAddress"]; ?>
                                        </td>
                                        </tr>
                                    <?php } ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="module" src="<?php echo BASE_URL; ?>js/ClientInfoManagementTool.js"></script>
<link href="<?php echo BASE_URL; ?>css/ClientInfoManagementTool.css" rel="stylesheet">
