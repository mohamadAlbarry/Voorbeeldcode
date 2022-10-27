
<div class="modal fade" id="NavItemToevoegenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLongTitle">Toevoegen</h1>
            </div>
            <div class="modal-body">
            <form id="addNavItemForm" method="POST">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Name</span>
                        </div>
                        <input type="text" class="form-control" id="nameNav" name="Name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Discipline</span>
                        </div>
                        <input type="text" class="form-control" id="disciplineName" name="Discipline_Name" placeholder="Discipline" aria-label="Discipline" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">ParentID</span>

                        </div>
                        <select style="width: 50%;" name="ParentID" id="parent_id" required>
                        <?php
                        $tableNav = AdminNavbarModel::getAllNavBarItems();
                        foreach ($tableNav as $row) {
                        ?>
                        <option class="dropdown-item" style="background-color: white;" value= "<?php echo $row["id"]; ?> " required><?php echo $row["id"] .": ".$row["name"] ;?></option>
                        <?php } ?>
                        </select>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">SOrder</span>
                        </div>
                        <input type="number" class="form-control" id="sOrder" name="SOrder" placeholder="SOrder" aria-label="SOrder" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Href</span>
                        </div>
                        <input type="text" class="form-control" name="Href" placeholder="Href" aria-label="Href" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Status</span>
                        </div>
                        <div class="form-check"  style="width:50%">
                        <input class="form-check-input" type="radio" name="Status" value="enabled">
                        <label class="form-check-label" style="margin-left:-6px;" for="enabled">Enabled</label>
                        <input class="form-check-input" style="margin-left:3.5px;" type="radio" name="Status" value="disabled">
                        <label class="form-check-label" style="margin-left:17.5px;" for="disabled">Disabled</label>
                        <input class="form-check-input" style="margin-left:4.5px;" type="radio" name="Status" value="NoChild">
                        <label class="form-check-label" style="margin-left:17.5px;" for="NoChild">NoChild</label>
                        </div>
                    </div>
                        </br>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-success"><span class="material-icons-outlined pb-0">done</span></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="DisciplineToevoegenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLongTitle">Toevoegen</h1>
            </div>
            <div class="modal-body">
            <form id="addDisciplineForm" method="POST">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Discipline</span>
                        </div>
                        <input type="text" class="form-control" id="nameOfDiscipline" name="Discipline" placeholder="Discipline" aria-label="Discipline" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Available</span>
                        </div>
                        <div class="form-check" style="padding-left: 2rem; padding-top: 0.5rem">
                        <input class="form-check-input" type="radio" name="Available" value="1">
                        <label class="form-check-label" for="Ja">Ja</label>
                        <input class="form-check-input" style="margin-left:1rem;" type="radio" name="Available" value="0">
                        <label class="form-check-label" style="margin-left:2.1rem;" for="Nee">Nee</label>
                        </div>
                    </div>
                    
        
                        </br>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-success"><span class="material-icons-outlined pb-0">done</span></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="DisciplineToevoegenModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLongTitle">Toevoegen</h1>
            </div>
            <div class="modal-body">
            <form id="addDisciplineForm2" method="POST">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Discipline</span>
                        </div>
                        <input type="text" class="form-control" id="nameOfDiscipline2" name="Discipline" placeholder="Discipline" aria-label="Discipline" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Available</span>
                        </div>
                        <div class="form-check" style="padding-left: 2rem; padding-top: 0.5rem">
                        <input class="form-check-input" type="radio" name="Available" value="1">
                        <label class="form-check-label" for="Ja">Ja</label>
                        <input class="form-check-input" style="margin-left:1rem;" type="radio" name="Available" value="0">
                        <label class="form-check-label" style="margin-left:2.1rem;" for="Nee">Nee</label>
                        </div>
                    </div>
                    
        
                        </br>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-success"><span class="material-icons-outlined pb-0">done</span></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="RoleToevoegenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLongTitle">Toevoegen</h1>
            </div>
            <div class="modal-body">
            <form id="addRoleForm" method="POST">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Role</span>
                        </div>
                        <input type="text" class="form-control" id="nameOfRole" name="Role" placeholder="Role" aria-label="Role" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">CompanyID</span>
                        </div>
                        <input type="number" class="form-control" name="CompanyID" placeholder="CompanyID" aria-label="CompanyID" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Available</span>
                        </div>
                        <div class="form-check" style="padding-left: 2rem; padding-top: 0.5rem">
                        <input class="form-check-input" type="radio" name="Available" value="1">
                        <label class="form-check-label" for="Ja">Ja</label>
                        <input class="form-check-input" style="margin-left:1rem;" type="radio" name="Available" value="0">
                        <label class="form-check-label" style="margin-left:2.1rem;" for="Nee">Nee</label>
                        </div>
                    </div>
                    
        
                        </br>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-success"><span class="material-icons-outlined pb-0">done</span></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="RoleToevoegenModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLongTitle">Toevoegen</h1>
            </div>
            <div class="modal-body">
            <form id="addRoleForm2" method="POST">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Role</span>
                        </div>
                        <input type="text" class="form-control" id="nameOfRole2" name="Role" placeholder="Role" aria-label="Role" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">CompanyID</span>
                        </div>
                        <input type="number" class="form-control" name="CompanyID" placeholder="CompanyID" aria-label="CompanyID" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Available</span>
                        </div>
                        <div class="form-check" style="padding-left: 2rem; padding-top: 0.5rem">
                        <input class="form-check-input" type="radio" name="Available" value="1">
                        <label class="form-check-label" for="Ja">Ja</label>
                        <input class="form-check-input" style="margin-left:1rem;" type="radio" name="Available" value="0">
                        <label class="form-check-label" style="margin-left:2.1rem;" for="Nee">Nee</label>
                        </div>
                    </div>
                    
        
                        </br>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-success"><span class="material-icons-outlined pb-0">done</span></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="UserToevoegenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLongTitle">Toevoegen</h1>
            </div>
            <div class="modal-body">
            <form id="addUserForm" method="POST">
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Voornaam</span>
                        </div>
                        <input type="text" class="form-control" id="Voornaam" name="Voornaam" placeholder="Voornaam" aria-label="Voornaam" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Initialen</span>
                        </div>
                        <input type="text" class="form-control" id="Initialen" name="Initialen" placeholder="Initialen" aria-label="Initialen" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Achternaam</span>
                        </div>
                        <input type="text" class="form-control" id="Achternaam" name="Achternaam" placeholder="Achternaam" aria-label="Achternaam" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Aanhef</span>
                        </div>
                        <input type="text" class="form-control" id="Aanhef" name="Aanhef" placeholder="Aanhef" aria-label="Aanhef" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Email</span>
                        </div>
                        <input type="email" class="form-control" id="Email" name="Email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Telefoonnummer</span>
                        </div>
                        <input type="tel" class="form-control" id="Telefoonnummer" name="Telefoonnummer" placeholder="Telefoonnummer" aria-label="Telefoonnummer" aria-describedby="basic-addon1" required>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Company</span>
                        </div>
                        <select class="selectpicker companies w-50" name="Companies" id="Companies" onchange="getRelatedSubsidairy()" required>
                        <option id="CompanyToDelete" selected disabled>Kies een bedrijf</option>


                        <?php
                        $tableCompanies = AdminNavbarModel::getAllCompanies();
                        foreach ($tableCompanies as $row) {
                        ?>
                        <option class="dropdown-item" id="CompanyIDForSubsidairy" value= "<?php echo $row["id"]; ?> " required><?php echo $row["companyName"];?></option>
                        <?php } ?>
                        </select>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Subsidiary</span>
                        </div>
                        <select  class="selectpicker subsidiaries w-50" name="Subsidiaries" id="Subsidiaries" required>
                        <option id="dropdown-item">kies een filiaal</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend w-50">
                        <span class="input-group-text igcolQuestion">Available</span>
                        </div>
                        <div class="form-check" style="padding-left: 2rem; padding-top: 0.5rem">
                        <input class="form-check-input" type="radio" name="Available" value="1">
                        <label class="form-check-label" for="Ja">Ja</label>
                        <input class="form-check-input" style="margin-left:1rem;" type="radio" name="Available" value="0">
                        <label class="form-check-label" style="margin-left:2.1rem;" for="Nee">Nee</label>
                        </div>
                    </div>
                    
        
                        </br>
                    <div class="btn-group">
                        <button type="submit" class="btn btn-success"><span class="material-icons-outlined pb-0">done</span></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-xl" id="NavItemVerwijderenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel"> Items verwijderen </h1>
            </div>
            <div class="modal-body">
            <h3 id="title" class="sub-header">Selecteer een item om te verwijderen: </h3>
            </br>              
            <h3 id="table3_title" class="sub-header">Navigatiebalk objecten</h3>
            </br>
            <table id="table3" class="table table-striped table-resposive table-bordered table-hover" style="width:100%">
                <thead>
                    <tr class="d-flex">
                        <th width="50%">Naam</th>
                        <th width="50%">Parent-ID</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $tableNavBarItems = AdminNavbarModel::getAllNavBarItems();
                    foreach ($tableNavBarItems as $row) {
                    ?>
                        <tr class="d-flex rowNavItemToDelete" id="R<?php echo  $row["id"] ?>" name="<?php echo $row["name"]; ?>">
                            <td width="50%" id="R<?php echo  $row["id"] ?>" onClick="getIdNavBarItem(this.id)"><?php echo $row["name"]; ?></td>
                            <td width="50%" id="R<?php echo  $row["id"] ?>" onClick="getIdNavBarItem(this.id)"><?php echo $row["parent_id"]; ?></td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>

            </div>
            <div class="modal-footer">
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" id="item_verwijderen"  class="btn btn-success" onclick="sendNavItemID()"><span class="material-icons-outlined pb-0">done</span></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-xl" id="DisciplineVerwijderenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel"> Discipline verwijderen </h1>
            </div>
            <div class="modal-body">
            <h3 id="title" class="sub-header">Selecteer een Discipline om te verwijderen: </h3>
            </br>              
            <h3 id="tblDisciplineToDelete_title" class="sub-header">Disciplines</h3>
            </br>
            <table id="tblDisciplineToDelete" class="table table-striped table-resposive table-bordered table-hover" style="width:100%">
                <thead>
                    <tr class="d-flex">
                        <th width="100%">Discipline</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                $tableDisciplines = AdminNavbarModel::getAllDisciplines();
                foreach ($tableDisciplines as $row) {
                ?>
                    <tr class="d-flex rowDisciplineToDelete" id="L<?= $row["id"] ?>" onClick="getIdDiscipline(this.id)">
                        <td width="100%"><?=$row["discipline"]; ?></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>

            </div>
            <div class="modal-footer">
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" id="discipline_verwijderen"  class="btn btn-success" onclick="sendDisciplineIDToDelete()"><span class="material-icons-outlined pb-0">done</span></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-xl" id="DisciplineVerwijderenModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel"> Discipline verwijderen </h1>
            </div>
            <div class="modal-body">
            <h3 id="title" class="sub-header">Selecteer een Discipline om te verwijderen: </h3>
            </br>              
            <h3 id="tblDisciplineToDelete_title2" class="sub-header">Disciplines</h3>
            </br>
            <table id="tblDisciplineToDelete2" class="table table-striped table-resposive table-bordered table-hover" style="width:100%">
                <thead>
                    <tr class="d-flex">
                        <th width="100%">Discipline</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                $tableDisciplines = AdminNavbarModel::getAllDisciplines();
                foreach ($tableDisciplines as $row) {
                ?>
                    <tr class="d-flex rowDisciplineToDelete2" id="L<?= $row["id"] ?>" onClick="getIdDiscipline(this.id)">
                        <td width="100%"><?=$row["discipline"]; ?></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
            </div>
            <div class="modal-footer">
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" id="discipline_verwijderen"  class="btn btn-success" onclick="sendDisciplineIDToDelete()"><span class="material-icons-outlined pb-0">done</span></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-xl" id="RoleVerwijderenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel"> Role verwijderen </h1>
            </div>
            <div class="modal-body">
            <h3 id="title" class="sub-header">Selecteer een Role om te verwijderen: </h3>
            </br>              
            <h3 id="tblRoleToDelete_title" class="sub-header">Roles</h3>
            </br>
            <table id="tblRoleToDelete" class="table table-striped table-resposive table-bordered table-hover" style="width:100%">
                <thead>
                    <tr class="d-flex">
                        <th width="100%">Role</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                $tableRoles = AdminNavbarModel::getAllRoles();
                foreach ($tableRoles as $row) {
                ?>
                    <tr class="d-flex rowRoleToDelete" id="<?= $row["id"] ?>" onClick="selectRoleID(this.id)">
                        <td width="100%"><?=$row["role"]; ?></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
            </div>
            <div class="modal-footer">
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" id="role_verwijderen"  class="btn btn-success" onclick="sendRoleIDToDelete()"><span class="material-icons-outlined pb-0">done</span></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-xl" id="RoleVerwijderenModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel"> Role verwijderen </h1>
            </div>
            <div class="modal-body">
            <h3 id="title" class="sub-header">Selecteer een Role om te verwijderen: </h3>
            </br>              
            <h3 id="tblRoleToDelete2_title" class="sub-header">Roles</h3>
            </br>
            <table id="tblRoleToDelete2" class="table table-striped table-resposive table-bordered table-hover" style="width:100%">
                <thead>
                    <tr class="d-flex">
                        <th width="100%">Role</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                $tableRoles = AdminNavbarModel::getAllRoles();
                foreach ($tableRoles as $row) {
                ?>
                    <tr class="d-flex rowRoleToDelete2" id="<?= $row["id"] ?>" onClick="selectRoleID(this.id)">
                        <td width="100%"><?=$row["role"]; ?></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
            </div>
            <div class="modal-footer">
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" id="role_verwijderen"  class="btn btn-success" onclick="sendRoleIDToDelete()"><span class="material-icons-outlined pb-0">done</span></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade bd-example-modal-xl" id="UserVerwijderenModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel"> User verwijderen </h1>
            </div>
            <div class="modal-body">
            <h3 id="title" class="sub-header">Selecteer een User om te verwijderen: </h3>
            </br>              
            <h3 id="tblUserToDelete_title" class="sub-header">Users</h3>
            </br>
            <table id="tblUserToDelete" class="table table-striped table-resposive table-bordered table-hover" style="width:100%">
                <thead>
                    <tr class="d-flex">
                        <th width="100%">User</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                $tableUsers = AdminNavbarModel::getAllUsers();
                foreach ($tableUsers as $row) {
                ?>
                    <tr class="d-flex rowUserToDelete" id="<?= $row["id"] ?>" onClick="getUserId(this)">
                        <td width="100%"><?=$row["contactFirstname"] .' '.$row["contactSurname"]; ?></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>

            </div>
            <div class="modal-footer">
                <div class="btn-group" role="group" aria-label="Basic example">
                <button type="submit" id="user_verwijderen"  class="btn btn-success" onclick="sendUserIDToDelete()"><span class="material-icons-outlined pb-0">done</span></button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><span class="material-icons-outlined pb-0">clear</span></button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="modal_alert_toegevoegd" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Done</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p id="modal_content_toegevoegd"></p>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="modal_alert" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Let op!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p id="modal_content"></p>
            </div>
        </div>
    </div>
</div>