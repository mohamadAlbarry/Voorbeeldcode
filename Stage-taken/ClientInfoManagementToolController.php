<?php

include_once "Models/ClientInfoManagementToolModel.php";
include_once("Config/DBConfig.php");
include_once("Common/ProjectData.php");

class ClientInfoManagementToolController extends Controller
{
    public function overview()
    {
        
        $this->getCompanies();
        $this->getSubsidiaries();
        $this->getContacts();
        $this->getTeamCompletion();

        $this->render("ClientInfoManagementTool");
    }

    public function getCompanies()
    {
        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = 'SELECT * FROM KIS_Company where Active = 1 ORDER BY KIS_Company_ID asc';
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        ClientInfoManagementToolModel::setAllCompanies($res);
    }

    public function getSubsidiaries()
    {
        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = 'SELECT * FROM KIS_Subsidiary where Active = 1 ORDER BY KIS_Subsidiary_ID asc';
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        ClientInfoManagementToolModel::setAllSubsidiaries($res);
    }

    public function getContacts()
    {
        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = 'SELECT * FROM KIS_Contact where Active = 1 ORDER BY KIS_Contact_ID asc';
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        ClientInfoManagementToolModel::setAllContacts($res);
    }    

    public function createContact()
    {
        $FirstName = $_POST['FirstName'] ?? "";
        $LastName = $_POST['LastName'] ?? "";
        $Name = $LastName.", ".$FirstName;
        $ContactTitle = $_POST['ContactTitle'] ?? "";
        $Initials = $_POST['Initials'] ?? "";
        $Gender = $_POST['Gender'] ?? "";
        $PhoneNumber = $_POST['PhoneNumber'] ?? "";
        $Email = $_POST['Email'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "INSERT INTO KIS_Contact (KIS_Contact_RelationID, KIS_Contact_Name, KIS_Contact_Initials,KIS_Contact_Title, KIS_Contact_FirstName, KIS_Contact_Surname, KIS_Contact_Gender, KIS_Contact_PhoneNumber, KIS_Contact_EmailAddress) VALUES ('', '$Name', '$Initials', '$ContactTitle', '$FirstName', '$LastName', '$Gender', '$PhoneNumber', '$Email')";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);

        $lastInsertID = $projectConnection->lastInsertId();
        $sql = "SELECT * FROM KIS_Contact WHERE KIS_Contact_ID ='" . $lastInsertID . "'";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        echo json_encode($res);

        $subsidiaryID =  $_POST['subsidiaryID'] ?? "";
        $sql = "INSERT INTO KIS_Subsidiary_Contact (Subsidiary_ID, Contact_ID) VALUES ('$subsidiaryID', '$lastInsertID')";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);

    }

    public function createSubsidiary()
    {
        $Name = $_POST['Name'] ?? "";
        $PostalAddress = $_POST['PostalAddress'] ?? "";
        $PostalPostcode = $_POST['PostalPostcode'] ?? "";
        $PostalTown = $_POST['PostalTown'] ?? "";
        $PostalCountry = $_POST['PostalCountry'] ?? "";
        $VisitingAddress = $_POST['VisitingAddress'] ?? "";
        $VisitingPostcode = $_POST['VisitingPostcode'] ?? "";
        $VisitingTown = $_POST['VisitingTown'] ?? "";
        $VisitingCountry = $_POST['VisitingCountry'] ?? "";
        $TelephoneNumber = $_POST['TelephoneNumber'] ?? "";
        $FaxNumber = $_POST['FaxNumber'] ?? "";
        $Email = $_POST['Email'] ?? "";
        $CompanyStructure = $_POST['CompanyStructure'] ?? "";
        $CompanyType = $_POST['CompanyType'] ?? "";
        $TeamCompletion = $_POST['TeamCompletion'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "INSERT INTO KIS_Subsidiary (KIS_Subsidiary_Name, KIS_Subsidiary_PostalAddress, KIS_Subsidiary_PostalPostCode, KIS_Subsidiary_PostalTown, KIS_Subsidiary_PostalCountry, KIS_Subsidiary_VisitingAddress, KIS_Subsidiary_VisitingPostCode, KIS_Subsidiary_VisitingTown, KIS_Subsidiary_VisitingCountry, KIS_Subsidiary_TelephoneNumber, KIS_Subsidiary_FaxNumber, KIS_Subsidiary_GeneralEmailAddress, KIS_Subsidiary_CompanyStructure, KIS_Subsidiary_CompanyType, KIS_Team_Completion) VALUES ('$Name', '$PostalAddress', '$PostalPostcode', '$PostalTown', '$PostalCountry', '$VisitingAddress', '$VisitingPostcode', '$VisitingTown', '$VisitingCountry', '$TelephoneNumber', '$FaxNumber', '$Email', '$CompanyStructure', '$CompanyType', '$TeamCompletion')";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);

        $lastInsertID = $projectConnection->lastInsertId();
        $companyID =  $_POST['companyID'] ?? "";
        $sql = "INSERT INTO KIS_Company_Subsidiary (Company_ID, Subsidiary_ID) VALUES ('$companyID', '$lastInsertID')";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);

        $sql = "SELECT * FROM KIS_Subsidiary WHERE KIS_Subsidiary_ID ='" . $lastInsertID . "'";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        echo json_encode($res);
    }

    public function createCompany()
    {
        $CreditorID = $_POST['CreditorID'] ?? "";
        $CustomerID = $_POST['CustomerID'] ?? "";
        $Name = $_POST['Name'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "INSERT INTO KIS_Company (KIS_Company_CreditorID, KIS_Company_CustomerID, KIS_Company_Name) VALUES ('$CreditorID', '$CustomerID', '$Name')";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);

        $lastInsertID = $projectConnection->lastInsertId();
        $sql = "SELECT * FROM KIS_Company WHERE KIS_Company_ID ='" . $lastInsertID . "'";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        echo json_encode($res);
    }

    public function getRelatedSubsidiaries()
    {
        $companyID =  $_POST['companyID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "SELECT * FROM KIS_Company_Subsidiary WHERE Company_ID = ?";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([$companyID]);
        $res = $stmt->fetchAll();
        $data['relatedSubs'] = $res;

        $sql1 = "SELECT * FROM KIS_Company WHERE KIS_Company_ID = ?";
        $stmt1 = $projectConnection->prepare($sql1); 
        $stmt1->execute([$companyID]);
        $res1 = $stmt1->fetchAll();
        $data['companyThings'] = $res1;

        echo json_encode($data);

    }

    public function getRelatedContacts()
    {
        $subsidiaryID =  $_POST['subsidiaryID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "SELECT * FROM KIS_Subsidiary_Contact WHERE Subsidiary_ID = ?";
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([$subsidiaryID]);
        $res = $stmt->fetchAll();
        echo json_encode($res);

    }

    public function deactivateCompany()
    {
        $companyID =  $_POST['companyID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "UPDATE KIS_Company SET Active = '0' WHERE KIS_Company_ID='" . $companyID . "'";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
    }

    public function deactivateSubsidiary()
    {
        $subsidiaryID =  $_POST['subsidiaryID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "UPDATE KIS_Subsidiary SET Active = '0' WHERE KIS_Subsidiary_ID='" . $subsidiaryID . "'";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
    }

    public function deactivateContact()
    {
        $contactID =  $_POST['contactID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "UPDATE KIS_Contact SET Active = '0' WHERE KIS_Contact_ID='" . $contactID . "'";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
    }

    public function modifyCompany()
    {
        $companyID =  $_POST['companyID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "SELECT * FROM KIS_Company where KIS_Company_ID = '" . $companyID . "'";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        echo json_encode($res);
    }

    public function saveCompany()
    {
        $companyID =  $_POST['companyID'] ?? "";
        $Name =  $_POST['Name'] ?? "";
        $CustomerID =  $_POST['CustomerID'] ?? "";
        $CreditorID =  $_POST['CreditorID'] ?? "";


        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "UPDATE `KIS_Company` SET 
        `KIS_Company_Name` = '$Name', 
        `KIS_Company_CustomerID` = '$CustomerID', 
        `KIS_Company_CreditorID` = '$CreditorID' where KIS_Company_ID ='".$companyID."' ";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
    }

    public function modifySubsidiary()
    {
        $subsidiaryID =  $_POST['subsidiaryID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "SELECT * FROM KIS_Subsidiary where KIS_Subsidiary_ID = '" . $subsidiaryID . "'";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        echo json_encode($res);
    }

    public function saveSubsidiary()
    {
        $subsidiaryID =  $_POST['subsidiaryID'] ?? "";
        $Name =  $_POST['Name'] ?? "";

        $PostalAddress = $_POST['PostalAddress'] ?? "";
        $PostalPostCode = $_POST['PostalPostCode'] ?? "";
        $PostalTown = $_POST['PostalTown'] ?? "";
        $PostalCountry = $_POST['PostalCountry'] ?? "";

        $VisitingAddress = $_POST['VisitingAddress'] ?? "";
        $VisitingPostCode = $_POST['VisitingPostCode'] ?? "";
        $VisitingTown = $_POST['VisitingTown'] ?? "";
        $VisitingCountry = $_POST['VisitingCountry'] ?? "";

        $TelephoneNumber = $_POST['TelephoneNumber'] ?? "";
        $GeneralEmailAddress = $_POST['GeneralEmailAddress'] ?? "";
        $FaxNumber = $_POST['FaxNumber'] ?? "";
        $CompanyStructure = $_POST['CompanyStructure'] ?? "";
        $CompanyType = $_POST['CompanyType'] ?? "";
        $TeamCompletion = $_POST['TeamCompletion'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "UPDATE `KIS_Subsidiary` SET 
        `KIS_Subsidiary_Name` = '$Name',
        `KIS_Subsidiary_PostalAddress` = '$PostalAddress',
        `KIS_Subsidiary_PostalPostCode` = '$PostalPostCode',
        `KIS_Subsidiary_PostalTown` = '$PostalTown',
        `KIS_Subsidiary_PostalCountry` = '$PostalCountry',
        `KIS_Subsidiary_VisitingAddress` = '$VisitingAddress',
        `KIS_Subsidiary_VisitingPostCode` = '$VisitingPostCode',
        `KIS_Subsidiary_VisitingTown` = '$VisitingTown',
        `KIS_Subsidiary_VisitingCountry` = '$VisitingCountry',
        `KIS_Subsidiary_TelephoneNumber` = '$TelephoneNumber',
        `KIS_Subsidiary_FaxNumber` = '$FaxNumber',
        `KIS_Subsidiary_GeneralEmailAddress` = '$GeneralEmailAddress',
        `KIS_Subsidiary_CompanyStructure` = '$CompanyStructure',
        `KIS_Subsidiary_CompanyType` = '$CompanyType',
        `KIS_Team_Completion` = '$TeamCompletion'
        where KIS_Subsidiary_ID ='".$subsidiaryID."' ";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
    }

    public function modifyContact()
    {
        $contactID =  $_POST['contactID'] ?? "";

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "SELECT * FROM KIS_Contact where KIS_Contact_ID = '" . $contactID . "'";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        echo json_encode($res);
    }

    public function saveContact()
    {
        $contactID = $_POST['contactID'] ?? "";
        $FirstName = $_POST['FirstName'] ?? "";
        $LastName = $_POST['LastName'] ?? "";
        $Name = $LastName.", ".$FirstName;
        $ContactTitle = $_POST['ContactTitle'] ?? "";
        $Initials = $_POST['Initials'] ?? "";
        $Gender = $_POST['Gender'] ?? "";
        $PhoneNumber = $_POST['PhoneNumber'] ?? "";
        $Email = $_POST['Email'] ?? "";        

        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = "UPDATE `KIS_Contact` SET 
        `KIS_Contact_Name` = '$Name', 
        `KIS_Contact_Initials` = '$Initials', 
        `KIS_Contact_Title` = '$ContactTitle',
        `KIS_Contact_FirstName` = '$FirstName',
        `KIS_Contact_Surname` = '$LastName',
        `KIS_Contact_Gender` = '$Gender',
        `KIS_Contact_PhoneNumber` = '$PhoneNumber',
        `KIS_Contact_EmailAddress` = '$Email'
        where KIS_Contact_ID ='".$contactID."' ";
        $stmt = $projectConnection->prepare($sql);
        $stmt->execute([]);
    }

    public function getTeamCompletion()
    {
        $ProjectDBConfig = new ProjectDBConfig;
        $projectConnection = $ProjectDBConfig->projectDBConnect();
        $sql = 'SELECT * FROM ConfigDefaultTXT where Code = "PTFR" ';
        $stmt = $projectConnection->prepare($sql); 
        $stmt->execute([]);
        $res = $stmt->fetchAll();
        ClientInfoManagementToolModel::setTeamCompletion($res);
    }
}
?>

