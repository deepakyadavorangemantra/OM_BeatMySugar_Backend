const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var multipart = require('connect-multiparty');

const AddProductCategory = require("./api/routes/AddProductCategory");
const AddDosageForm = require("./api/routes/AddDosageForm");
const AddPackagingSize = require("./api/routes/AddPackagingSize");
const AddPackagingType = require("./api/routes/AddPackagingType");
const UpdateProductCategory = require("./api/routes/UpdateProductCategory");
const UpdateDosageForm = require("./api/routes/UpdateDosageForm");
const UpdatePackagingSize = require("./api/routes/UpdatePackagingSize");
const UpdatePackagingType = require("./api/routes/UpdatePackagingType");
const UsernameAuth = require("./api/routes/UsernameAuth");
const AddStaff = require("./api/routes/AddStaff");
const UpdateStaff = require("./api/routes/UpdateStaff");
const GetStaff = require("./api/routes/GetStaff");
const GetCountry = require("./api/routes/GetCountry");
const GetState = require("./api/routes/GetState");
const GetCity = require("./api/routes/GetCity");
const GetProductCategory = require("./api/routes/GetProductCategory");
const GetDosageForm = require("./api/routes/GetDosageForm");
const GetPackagingSize = require("./api/routes/GetPackagingSize");
const GetPackagingType = require("./api/routes/GetPackagingType");
const UpdatePasswordDetails = require("./api/routes/UpdatePasswordDetails");
const DeleteProductCategory = require("./api/routes/DeleteProductCategory");
const DeleteDosageForm = require("./api/routes/DeleteDosageForm");
const DeletePackagingSize = require("./api/routes/DeletePackagingSize");
const DeletePackagingType = require("./api/routes/DeletePackagingType");
const AddFaq = require("./api/routes/AddFaq");
const GetFaq = require("./api/routes/GetFaq");
const DeleteFaq = require("./api/routes/DeleteFaq");
const UpdateFaq = require("./api/routes/UpdateFaq");
const AddPharmaCompany = require("./api/routes/AddPharmaCompany");
const GetBrand = require("./api/routes/GetBrand");
const AddBrand = require("./api/routes/AddBrand");
const UpdateBrand = require("./api/routes/UpdateBrand");
const GetPharmaCompany = require("./api/routes/GetPharmaCompany");
const UpdatePharmaCompany = require("./api/routes/UpdatePharmaCompany");
const AddLoginSession = require("./api/routes/AddLoginSession");
const AddLoginDetails = require("./api/routes/AddLoginDetails");
const AddDoctorQualification = require("./api/routes/AddDoctorQualification");
const AddNutritionist = require("./api/routes/AddNutritionist");
const AddNutritionistQualification = require("./api/routes/AddNutritionistQualification")
const AddYogaTrainer = require("./api/routes/AddYogaTrainer");
const AddYogaTrainerQualification = require("./api/routes/AddYogaTrainerQualification");
const AddHealthCareCenter = require("./api/routes/AddHealthCareCenter");
const AddDiagnosticCenter = require("./api/routes/AddDiagnosticCenter");
const AddDoctor = require("./api/routes/AddDoctor");
const GetDoctor = require("./api/routes/GetDoctor");
const GetNutritionist = require("./api/routes/GetNutritionist");
const GetYogaTrainer = require("./api/routes/GetYogaTrainer");
const GetHealthCenter = require("./api/routes/GetHealthCenter");
const GetDiagnosticCenter = require("./api/routes/GetDiagnosticCenter");
const GetDoctorQualification = require("./api/routes/GetDoctorQualification");
const UpdateDoctor = require("./api/routes/UpdateDoctor");
const GetNutritionistQualification = require("./api/routes/GetNutritionistQualification");
const UpdateNutritionist = require("./api/routes/UpdateNutritionist");
const GetYogaQualification = require("./api/routes/GetYogaQualification");
const UpdateYogaTrainer = require("./api/routes/UpdateYogaTrainer");
const UpdateHealthCenter = require("./api/routes/UpdateHealthCenter");
const UpdateDiagnosticCenter = require("./api/routes/UpdateDiagnosticCenter");
const GetDiagnosticCenterBranch = require("./api/routes/GetDiagnosticCenterBranch");
const AddDiagnosticCenterBranch = require("./api/routes/AddDiagnosticCenterBranch");
const UpdateDiagnosticCenterBranch = require("./api/routes/UpdateDiagnosticCenterBranch");
const GetBlogCategory = require("./api/routes/GetBlogCategory");
const GetBlogSubCategory = require("./api/routes/GetBlogSubCategory");
const AddBlog = require("./api/routes/AddBlog");
const GetBlog = require("./api/routes/GetBlog");
const UpdateBlog = require("./api/routes/UpdateBlog");
const DeleteBlog = require("./api/routes/DeleteBlog");
const RegisterCustomer = require("./api/routes/RegisterCustomer");
const AddUserLoginSession = require("./api/routes/AddUserLoginSession");
const CustomerLoginAuth = require("./api/routes/CustomerLoginAuth");
const AddBlogComments= require("./api/routes/AddBlogComments");
const GetBlogComments= require("./api/routes/GetBlogComments");
const GetBlogCommentsToApprove= require("./api/routes/GetBlogCommentsToApprove");
const ApproveBlogComment= require("./api/routes/ApproveBlogComment");
const DeleteBlogComment= require("./api/routes/DeleteBlogComment");
const GetRegisteredCustomer= require("./api/routes/GetRegisteredCustomer");
const AddCustomerBlogLikeStatus= require("./api/routes/AddCustomerBlogLikeStatus");
const UpdateLikeCount= require("./api/routes/UpdateLikeCount");
const GetBlogCustomerLikedStatus= require("./api/routes/GetBlogCustomerLikedStatus");
const GetMarketer= require("./api/routes/GetMarketer");

const AddDevice= require("./api/routes/AddDevice");
const GetDevice= require("./api/routes/GetDevice");
const UpdateDevice= require("./api/routes/UpdateDevice");
const AddDeviceImageMapping= require("./api/routes/AddDeviceImageMapping");
const GetDeviceImage= require("./api/routes/GetDeviceImage");
const AddDeviceVendorMapping= require("./api/routes/AddDeviceVendorMapping");
const GetDeviceVendorMapping= require("./api/routes/GetDeviceVendorMapping");

const AddBook= require("./api/routes/AddBook");
const GetBooks= require("./api/routes/GetBooks");
const UpdateBook= require("./api/routes/UpdateBook");
const AddBookImageMapping= require("./api/routes/AddBookImageMapping");
const GetBookImage= require("./api/routes/GetBookImage");
const AddBookVendorMapping= require("./api/routes/AddBookVendorMapping");
const GetBookVendorMapping= require("./api/routes/GetBookVendorMapping");

const AddAllopathyMedicine= require("./api/routes/AddAllopathyMedicine");
const GetAllopathyMedicine= require("./api/routes/GetAllopathyMedicine");
const AddAllopathyImageMapping= require("./api/routes/AddAllopathyImageMapping");
const UpdateAllopathicMedicine= require("./api/routes/UpdateAllopathicMedicine");
const GetMedicineAllopathyImage= require("./api/routes/GetMedicineAllopathyImage");

const AddAllopathyVendorMapping= require("./api/routes/AddAllopathyVendorMapping");
const GetAllopathyVendorMapping= require("./api/routes/GetAllopathyVendorMapping");

const AddAyurvedicMedicine= require("./api/routes/AddAyurvedicMedicine");
const GetAyurvedicMedicine= require("./api/routes/GetAyurvedicMedicine");
const AddAyurvedicImageMapping= require("./api/routes/AddAyurvedicImageMapping");
const GetMedicineAyuvedicMapping= require("./api/routes/GetMedicineAyuvedicMapping");
const UpdateAyurvedicMedicine= require("./api/routes/UpdateAyurvedicMedicine");
const GetMedicineAyuvedicImage= require("./api/routes/GetMedicineAyuvedicImage");

const AddAyurvedicVendorMapping= require("./api/routes/AddAyurvedicVendorMapping");
const GetAyurvedicVendorMapping= require("./api/routes/GetAyurvedicVendorMapping");

const AddFootCare= require("./api/routes/AddFootCare");
const GetFootCare= require("./api/routes/GetFootCare");
const AddFootCareImageMapping= require("./api/routes/AddFootCareImageMapping");
const AddFootCareSizeMapping= require("./api/routes/AddFootCareSizeMapping");
const GetFootCareImage= require("./api/routes/GetFootCareImage");
const UpdateFootCare= require("./api/routes/UpdateFootCare");
const GetFootCareSizeMapping= require("./api/routes/GetFootCareSizeMapping");
const AddFootcareVendorMapping= require("./api/routes/AddFootcareVendorMapping");
const GetFootcareVendorMapping= require("./api/routes/GetFootcareVendorMapping");


const AddVendor= require("./api/routes/AddVendor");
const AddVendorContactPerson= require("./api/routes/AddVendorContactPerson");
const GetVendor= require("./api/routes/GetVendor");
const UpdateVendor= require("./api/routes/UpdateVendor");
const GetVendorContactPerson= require("./api/routes/GetVendorContactPerson");
const UpdateVendorContactPerson= require("./api/routes/UpdateVendorContactPerson");


const AddOffer= require("./api/routes/AddOffer");
const UpdateOffer= require("./api/routes/UpdateOffer");
const GetOffer= require("./api/routes/GetOffer");

const AddDiagnosticTest= require("./api/routes/AddDiagnosticTest");
const UpdateDiagnosticTest= require("./api/routes/UpdateDiagnosticTest");
const GetDiagnosticTest= require("./api/routes/GetDiagnosticTest");
const AddDiagnosticTestFaqMapping= require("./api/routes/AddDiagnosticTestFaqMapping");
const GetDaignosticTestFaqMapping= require("./api/routes/GetDaignosticTestFaqMapping");


const GetHealthCenterDoctoMapping= require("./api/routes/GetHealthCenterDoctoMapping");
const AddHealthCenterDoctorMapping= require("./api/routes/AddHealthCenterDoctorMapping");
const UpdateHealthCenterDoctorMapping= require("./api/routes/UpdateHealthCenterDoctorMapping");


const GetHealthCenterNutritionistMapping= require("./api/routes/GetHealthCenterNutritionistMapping");
const AddHealthCenterNutritionistMapping= require("./api/routes/AddHealthCenterNutritionistMapping");
const UpdateHealthCenterNutritionistMapping= require("./api/routes/UpdateHealthCenterNutritionistMapping");

const AddFood= require("./api/routes/AddFood");
const AddFoodImageMapping= require("./api/routes/AddFoodImageMapping");
const GetFood= require("./api/routes/GetFood");
const GetFoodImage= require("./api/routes/GetFoodImage");
const UpdateFood= require("./api/routes/UpdateFood");
const AddFoodVendorMapping= require("./api/routes/AddFoodVendorMapping");
const GetFoodVendorMapping= require("./api/routes/GetFoodVendorMapping");


const GetBlogBackend= require("./api/routes/GetBlogBackend");



const AddSaltMaster= require("./api/routes/AddSaltMaster");
const UpdateSaltMaster= require("./api/routes/UpdateSaltMaster");
const GetSaltMaster= require("./api/routes/GetSaltMaster");
const DeleteSaltMaster= require("./api/routes/DeleteSaltMaster");
const AddContributor= require("./api/routes/AddContributor");
const UpdateContributor= require("./api/routes/UpdateContributor");
const GetContributor= require("./api/routes/GetContributor");
const GetHealthCenterContactPerson= require("./api/routes/GetHealthCenterContactPerson");
const AddHealthCenterContactPerson= require("./api/routes/AddHealthCenterContactPerson");
const UpdateHealthCenterContactPerson= require("./api/routes/UpdateHealthCenterContactPerson");
const AddOrder= require("./api/routes/AddOrder");
const AddOrderDetail= require("./api/routes/AddOrderDetail");
const GetNewOrders= require("./api/routes/GetNewOrders");
const GetOrderDetailData= require("./api/routes/GetOrderDetailData");
const AddOrderVendor= require("./api/routes/AddOrderVendor");
const GetVendorOrder= require("./api/routes/GetVendorOrder");
const UpdateShoppingCart= require("./api/routes/UpdateShoppingCart");
const DeleteShoppingCart= require("./api/routes/DeleteShoppingCart");
const DeleteShoppingCartItem= require("./api/routes/DeleteShoppingCartItem");
const AddWishlist= require("./api/routes/Web/AddWishlist");
const GetWishlistData= require("./api/routes/Web/GetWishlistData");
const DeleteWishlist= require("./api/routes/DeleteWishlist");
const DeleteWishlistItem= require("./api/routes/DeleteWishlistItem");
const UpdateWishlist= require("./api/routes/UpdateWishlist");
const CustomerOrderMailer= require("./api/routes/CustomerOrderMailer");


// ---------------------------- Web Api ------------------------------

const GetDoctorWeb= require("./api/routes/Web/GetDoctorWeb");
const GetBooksWeb= require("./api/routes/Web/GetBooksWeb");
const GetFootCareWeb= require("./api/routes/Web/GetFootCareWeb");
const GetDevicesWeb= require("./api/routes/Web/GetDevicesWeb");
const GetAllopathicMedicineWeb= require("./api/routes/Web/GetAllopathicMedicineWeb");
const GetAyurvedicMedicineWeb= require("./api/routes/Web/GetAyurvedicMedicineWeb");
const GetNutritionistWeb= require("./api/routes/Web/GetNutritionistWeb");
const GetBlogDetails= require("./api/routes/Web/GetBlogDetails");
const GetDoctorDetailsWeb= require("./api/routes/Web/GetDoctorDetailsWeb");
const GetDoctorHealthCenterWeb= require("./api/routes/Web/GetDoctorHealthCenterWeb");
const GetLabWeb= require("./api/routes/Web/GetLabWeb");
const GetLabDetailsWeb= require("./api/routes/Web/GetLabDetailsWeb");
const GetLabBranchesWeb= require("./api/routes/Web/GetLabBranchesWeb");

const GetNutritionistDetailsWeb= require("./api/routes/Web/GetNutritionistDetailsWeb");
const GetNutritionistHealthCenterWeb= require("./api/routes/Web/GetNutritionistHealthCenterWeb");
const GetBookDetailsWebsite= require("./api/routes/Web/GetBookDetailsWebsite");
const GetFootDetailsWebsite= require("./api/routes/Web/GetFootDetailsWebsite");
const GetShoppingCartData= require("./api/routes/Web/GetShoppingCartData");
const GetDeviceDetailsWebsite= require("./api/routes/Web/GetDeviceDetailsWebsite");
const GetAllopathyDetailsWebsite= require("./api/routes/Web/GetAllopathyDetailsWebsite");
const GetAyuvedicDetailsWebsite= require("./api/routes/Web/GetAyuvedicDetailsWebsite");
const GetFoodDetailsWebsite= require("./api/routes/Web/GetFoodDetailsWebsite");
const GetFoodWeb= require("./api/routes/Web/GetFoodWeb");
const GetHealthCenterDoctorWeb= require("./api/routes/Web/GetHealthCenterDoctorWeb");
const GetHealthCenterNutritionistWeb= require("./api/routes/Web/GetHealthCenterNutritionistWeb");



const AddShoppingCart= require("./api/routes/Web/AddShoppingCart");
const AddShippingAddressCustomer= require("./api/routes/Web/AddShippingAddressCustomer");
const GetShippingAddressCustomer= require("./api/routes/Web/GetShippingAddressCustomer");
const AddCustomerPrescription= require("./api/routes/Web/AddCustomerPrescription");


const GetBlogNine= require("./api/routes/Web/GetBlogNine");
const GetDoctorWebSix= require("./api/routes/Web/GetDoctorWebSix");
const GetNutritionistWebSix= require("./api/routes/Web/GetNutritionistWebSix");
const GetBlogCategoryWebsite= require("./api/routes/Web/GetBlogCategoryWebsite");
const GetBlogWithCategoryWebsite= require("./api/routes/Web/GetBlogWithCategoryWebsite");
const GetEmailExistsCustomer= require("./api/routes/Web/GetEmailExistsCustomer");
const GetSocialPosts= require("./api/routes/Web/GetSocialPosts");
const GetDevicesWebNine= require("./api/routes/Web/GetDevicesWebNine");
const GetBooksWebNine= require("./api/routes/Web/GetBooksWebNine");
const GetFootCareWebNine= require("./api/routes/Web/GetFootCareWebNine");


// ---------------------------- Web Api ------------------------------



// ---------------------------- Mailers ------------------------------

const CustomerRegistraionMailer= require("./api/routes/Web/CustomerRegistraionMailer");
const VerifyMailMailer= require("./api/routes/Web/VerifyMailMailer");
const IfEmailExists= require("./api/routes/Web/IfEmailExists");
const ForgotPasswordMailer= require("./api/routes/Web/ForgotPasswordMailer");
const UpdateCustomerPassword= require("./api/routes/Web/UpdateCustomerPassword");
const GetBlogTags= require("./api/routes/Web/GetBlogTags");
const ContactUsMailer= require("./api/routes/Web/ContactUsMailer");


// ---------------------------- Mobile Auth -------------------------

const VerifyMobileOTP= require("./api/routes/Web/VerifyMobileOTP");
const CustomerRegistraionMobileOTP= require("./api/routes/Web/CustomerRegistrationMobileOTP");


// ---------------------------- Mailers ------------------------------




const AddImage = require("./api/routes/AddImage");
const AddPdf = require("./api/routes/AddPdf");

const UrlToBase64 = require("./api/routes/UrlToBase64");

const TestDeleteImage = require("./api/routes/TestDeleteImage");




//-----------------------------------------New API -------------------------------------------------------------






//----------- AUTH-----------------

const AuthenticateStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/AuthenticateStaff")

//----------- ADD ------------------

const AddStaffLoginSession_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddStaffLoginSession")
const AddStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddStaff")

const AddCompanyMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCompanyMaster")
const AddBrandMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBrandMaster")
const AddFoodCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodCategoryMaster")
const AddFoodFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodFilterMaster")
const AddBookLanguageMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookLanguageMaster")
const AddBookCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookCategoryMaster")
const AddDeviceCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDeviceCategoryMaster")
const AddDeviceFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDeviceFilterMaster")
const AddFootwearTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearTypeMaster")
const AddFootwearColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearColorMaster")
const AddFootwearSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearSizeMaster")
const AddSocksSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksSizeMaster")
const AddSaltMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSaltMaster")
const AddPackagingTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddPackagingTypeMaster")
const AddContributor_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddContributor")
const AddDosageFormMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDosageFormMaster")
const AddMedicineCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddMedicineCategoryMaster")
const AddTagMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddTagMaster")
const AddArticleCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticleCategoryMaster")
const AddArticleSubCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticleSubCategoryMaster")
const AddFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFlavourMaster")
const AddArticle_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticle")
const AddArticleTagMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddArticleTagMapping")
const AddDoctor_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctor")
const AddDoctorQualificationMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctorQualificationMapping")
const AddDoctorSpecialisationMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctorSpecialisationMapping")
const AddDoctorCertificateMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDoctorCertificateMapping")
const AddDietitian_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDietitian")
const AddDietitianQualificationMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDietitianQualificationMapping")
const AddDietitianCertificateMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddDietitianCertificateMapping")
const AddHealthCenter_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenter")
const AddHealthCenterServicesMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterServicesMapping")
const AddHealthCenterTimingsMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterTimingsMapping")
const AddHealthCenterFacilitiesMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterFacilitiesMapping")
const AddFoodItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodItemMaster")
const AddBookItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookItemMaster")
const AddFoodItemMaster_FilterMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodItemMaster_FilterMapping")
const AddFootwearItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearItemMaster")
const AddSocksItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksItemMaster")
const AddSocksTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksTypeMaster")
const AddHealthCenterFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterFacilitiesMaster")
const AddFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodVariant")
const AddFoodVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodVariantImage")
const AddFoodVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFoodVariantVendorPricing")
const AddHealthCenterDoctorMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterDoctorMapping")
const AddHealthCenterDietitianMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterDietitianMapping")
const AddHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddHealthCenterServicesMaster")
const AddCareer_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddCareer")


const AddBookVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookVariant")
const AddBookVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookVariantImage")
const AddBookVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddBookVariantVendorPricing")

const AddFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearVariant")
const AddFootwearVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearVariantImage")
const AddFootwearVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddFootwearVariantVendorPricing")

const DeleteHealthCenterDoctorMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterDoctorMapping")
const DeleteHealthCenterDietitianMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterDietitianMapping")
//----------- GET ------------------

const GetCompany_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCompany")
const GetDepartment_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDepartment")
const GetDesignation_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDesignation")
const GetUserType_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserType")
const GetCountry_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCountry")
const GetState_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetState")
const GetCity_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCity")
const GetStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetStaff")
const GetArticleCategory_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleCategory")
const GetArticleSubCategory_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleSubCategory")
const GetArticleTags_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleTags")
const GetBlogContributors_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBlogContributors")
const GetArticleList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleList")
const GetQualification_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetQualification")
const GetSpecialisation_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSpecialisation")
const GetDoctorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDoctorList")
const GetPackagingTypeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetPackagingTypeData")
const GetVendorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorData")
const GetHealthCenterData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterData")

const GetHealthCenterDoctorMappingList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDoctorMappingList")
const GetHealthCenterDietitianMappingList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDietitianMappingList")

const GetFoodVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodVariantList")

const GetBookLanguageData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookLanguageData")
const GetBookTypeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookTypeData")

const GetBookVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookVariantList")
const GetFootwearColorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearColorData")
const GetFootwearSizeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearSizeData")

const GetSocksColorData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksColorData")
const GetSocksSizeData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksSizeData")

const GetFootwearVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearVariantList")
//----------- GET MASTER ------------------

const GetBookCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookCategoryList")
const GetBookLanguageList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookLanguageList")
const GetFoodFilterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodFilterList")
const GetFoodCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodCategoryList")
const GetBrandList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBrandList")
const GetDeviceCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDeviceCategoryList")
const GetDeviceFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDeviceFilter")
const GetCompanyList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCompanyList")
const GetFootwareTypeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwareTypeList")
const GetFootwareColorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwareColorList")
const GetFootwareSizeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwareSizeList")
const GetSocksSizeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksSizeList")
const GetSaltList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSaltList")
const GetPackagingTypeList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetPackagingTypeList")
const GetDosageFormList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDosageFormList")
const GetMedicineCategoryList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetMedicineCategoryList")
const GetTagMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetTagMasterList")
const GetArticleCategoryMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleCategoryMasterList")
const GetArticleSubCategoryMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetArticleSubCategoryMasterList")
const GetContributors_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetContributors")
const GetFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFlavourMaster")
const GetHealthCenterFacilities_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterFacilities")
const GetHealthCenterServices_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterServices")
const GetHealthCenterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterList")
const GetDietitianList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDietitianList")
const GetBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBrandData")
const GetFoodCategoryData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodCategoryData")
const GetFoodFilterData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodFilterData")
const GetFoodFlavourData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodFlavourData")
const GetGstData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetGstData")
const GetBookCategoryData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookCategoryData")
const GetBookItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBookItemMaster")
const GetFoodItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodItemMaster")
const GetFootwearTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearTypeMaster")
const GetFootwearItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearItemMaster")
const GetSocksItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksItemMaster")
const GetSocksTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksTypeMaster")
const GetSocksTypeMasterGrid_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksTypeMasterGrid")
const GetHealthCenterFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterFacilitiesMaster")
const GetHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterServicesMaster")
const GetCareer_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCareer")



//-------------- UPDATE ---------------

const ChangePassword_NewBackoffice = require("./api/routes/Backoffice-New-Api/ChangePassword")
const UpdateStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateStaff")
const UpdateContributor_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateContributor")
const UpdateFoodCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodCategoryMaster")
const UpdateFoodFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodFilterMaster")
const UpdateBookLanguageMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookLanguageMaster")
const UpdateBookCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookCategoryMaster")
const UpdateDeviceCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDeviceCategoryMaster")
const UpdateDeviceFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDeviceFilterMaster")
const UpdateFootwearTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearTypeMaster")
const UpdateFootwearSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearSizeMaster")
const UpdateFootwearColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearColorMaster")
const UpdateSocksSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksSizeMaster")
const UpdateSaltMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSaltMaster")
const UpdatePackagingTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdatePackagingTypeMaster")
const UpdateDosageFormMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDosageFormMaster")
const UpdateTagMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateTagMaster")
const UpdateArticleSubCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticleSubCategoryMaster")
const UpdateArticleCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticleCategoryMaster")
const UpdateFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFlavourMaster")
const UpdateCompanyLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCompanyLogo")
const UpdateCompanyMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCompanyMaster")
const UpdateBrandLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBrandLogo")
const UpdateBrandMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBrandMaster")
const UpdateContributorPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateContributorPhoto")
const UpdateArticlePreviewPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticlePreviewPhoto")
const UpdateArticleCoverPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticleCoverPhoto")
const UpdateDietitianPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianPhoto")
const UpdateDietitianConsent_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianConsent")
const UpdateDietitianPdf_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianPdf")
const UpdateDoctorPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorPhoto")
const UpdateDoctorConsent_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorConsent")
const UpdateDoctorPdf_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorPdf")
const UpdateStaffPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateStaffPhoto")
const UpdateDoctor_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctor")
const UpdateArticle_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateArticle")
const UpdateHealthCenter_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenter")
const UpdateDietitian_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitian")
const UpdateBookItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookItemMaster")
const UpdateFoodItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodItemMaster")
const UpdateFootwearItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearItemMaster")
const UpdateSocksItemMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksItemMaster")
const UpdateSocksTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksTypeMaster")
const UpdateHealthCenterFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenterFacilitiesMaster")
const UpdateHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenterServicesMaster")
const UpdateCareer_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCareer")


//-------------- DELETE ---------------

const DeleteCompanyMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteCompanyMaster")
const DeleteBrandMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBrandMaster")
const DeleteFoodCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFoodCategoryMaster")
const DeleteFoodFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFoodFilterMaster")
const DeleteBookLanguageMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBookLanguageMaster")
const DeleteBookCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBookCategoryMaster")
const DeleteDeviceCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDeviceCategoryMaster")
const DeleteDeviceFilterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDeviceFilterMaster")
const DeleteFootwareTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwareTypeMaster")
const DeleteFootwareColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwareColorMaster")
const DeleteFootwareSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwareSizeMaster")
const DeleteSocksSizeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSocksSizeMaster")
const DeleteSaltMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSaltMaster")
const DeletePackagingTypeMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeletePackagingTypeMaster")
const DeleteDosageFormMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDosageFormMaster")
const DeleteMedicineCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteMedicineCategoryMaster")
const DeleteTagMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteTagMaster")
const DeleteArticleCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteArticleCategoryMaster")
const DeleteArticleSubCategoryMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteArticleSubCategoryMaster")
const DeleteFlavourMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFlavourMaster")
const DeleteDoctorCertificate_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDoctorCertificate")
const DeleteDietitianCertificate_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteDietitianCertificate")
const DeleteSocksTypeMaster_NewBackoffice =  require("./api/routes/Backoffice-New-Api/DeleteSocksTypeMaster")
const DeleteHealthCenterFacilitiesMaster_NewBackoffice =  require("./api/routes/Backoffice-New-Api/DeleteHealthCenterFacilitiesMaster")
const DeleteHealthCenterServicesMaster_NewBackoffice =  require("./api/routes/Backoffice-New-Api/DeleteHealthCenterServicesMaster")






//----------- Web ------------------
const GetBlogNine_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogNine")
const GetDoctorWebSix_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorWebSix")
const GetNutritionistWebSix_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistWebSix")
const GetDoctorWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorWeb")
const GetNutritionistWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistWeb")
const GetDoctorDetailsWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorDetailsWeb")
const GetSocialPosts_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocialPosts")
const GetNutritionistDetailsWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistDetailsWeb")
const GetBlogCategoryWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogCategoryWebsite")
const GetBlogDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogDetails")
const GetBlogWithCategoryWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogWithCategoryWebsite")
const GetContributorsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetContributorsWebsite")
const GetContributorDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetContributorDetailsWebsite")
const IfEmailExists_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/IfEmailExists")

const VerifyMailMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VerifyMailMailer")
const VerifyMobileOTP_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VerifyMobileOTP")
const RegisterCustomer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/RegisterCustomer")
const CustomerRegistrationMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerRegistrationMailer")
const CustomerRegistrationMobileOTP_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerRegistrationMobileOTP")

const AddUserLoginSession_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddUserLoginSession")
const ForgotPasswordMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/ForgotPasswordMailer")
const UpdateCustomerPassword_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateCustomerPassword")
const CustomerLoginAuth_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerLoginAuth")

const AddCustomerBlogLikeStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddCustomerBlogLikeStatus")
const UpdateLikeCount_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateLikeCount")
const GetBlogCustomerLikedStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogCustomerLikedStatus")
const GetBlogComments_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogComments")
const AddBlogComments_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddBlogComments")
const GetBlogTags_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogTags")
//-----------------------------------------New API -------------------------------------------------------------



const app = express();


app.use(bodyParser.json({limit: '50MB', extended: true}));
app.use(bodyParser.urlencoded({limit: '50MB', extended: true }));
app.use(cors());
app.use(multipart({
    maxFieldsSize: '50MB'
}));

app.use("/AddProductCategory", AddProductCategory);
app.use("/AddDosageForm", AddDosageForm);
app.use("/AddPackagingSize", AddPackagingSize);
app.use("/AddPackagingType", AddPackagingType);
app.use("/UpdateProductCategory", UpdateProductCategory);
app.use("/UpdateDosageForm", UpdateDosageForm);
app.use("/UpdatePackagingSize", UpdatePackagingSize);
app.use("/UpdatePackagingType", UpdatePackagingType);
app.use("/UsernameAuth", UsernameAuth);
app.use("/AddStaff", AddStaff);
app.use("/UpdateStaff", UpdateStaff);
app.use("/GetStaff", GetStaff);
app.use("/GetCountry", GetCountry);
app.use("/GetState", GetState);
app.use("/GetCity", GetCity);
app.use("/GetProductCategory", GetProductCategory);
app.use("/GetDosageForm", GetDosageForm);
app.use("/GetPackagingSize", GetPackagingSize);
app.use("/GetPackagingType", GetPackagingType);
app.use("/UpdatePasswordDetails", UpdatePasswordDetails);
app.use("/DeleteProductCategory", DeleteProductCategory);
app.use("/DeleteDosageForm", DeleteDosageForm);
app.use("/DeletePackagingSize", DeletePackagingSize);
app.use("/DeletePackagingType", DeletePackagingType);
app.use("/AddFaq", AddFaq);
app.use("/GetFaq", GetFaq);AddPharmaCompany
app.use("/DeleteFaq", DeleteFaq);
app.use("/UpdateFaq", UpdateFaq);
app.use("/AddPharmaCompany", AddPharmaCompany);
app.use("/GetBrand", GetBrand);
app.use("/AddBrand", AddBrand);
app.use("/UpdateBrand", UpdateBrand);
app.use("/GetPharmaCompany", GetPharmaCompany);
app.use("/UpdatePharmaCompany", UpdatePharmaCompany);
app.use("/AddLoginSession", AddLoginSession);
app.use("/AddLoginDetails", AddLoginDetails);
app.use("/AddDoctorQualification", AddDoctorQualification);
app.use("/AddNutritionist", AddNutritionist);
app.use("/AddNutritionistQualification", AddNutritionistQualification);
app.use("/AddYogaTrainer", AddYogaTrainer);
app.use("/AddYogaTrainerQualification", AddYogaTrainerQualification);
app.use("/AddHealthCareCenter", AddHealthCareCenter);
app.use("/AddDiagnosticCenter", AddDiagnosticCenter);
app.use("/AddDoctor", AddDoctor);
app.use("/GetDoctor", GetDoctor);
app.use("/GetNutritionist", GetNutritionist);
app.use("/GetYogaTrainer", GetYogaTrainer);
app.use("/GetHealthCenter", GetHealthCenter);
app.use("/GetDiagnosticCenter", GetDiagnosticCenter);
app.use("/GetDoctorQualification", GetDoctorQualification);
app.use("/UpdateDoctor", UpdateDoctor);
app.use("/GetNutritionistQualification", GetNutritionistQualification);
app.use("/UpdateNutritionist", UpdateNutritionist);
app.use("/GetYogaQualification", GetYogaQualification);
app.use("/UpdateYogaTrainer", UpdateYogaTrainer);
app.use("/UpdateHealthCenter", UpdateHealthCenter);
app.use("/UpdateDiagnosticCenter", UpdateDiagnosticCenter);
app.use("/GetDiagnosticCenterBranch", GetDiagnosticCenterBranch);
app.use("/AddDiagnosticCenterBranch",AddDiagnosticCenterBranch);
app.use("/UpdateDiagnosticCenterBranch",UpdateDiagnosticCenterBranch);
app.use("/GetBlogCategory",GetBlogCategory);
app.use("/GetBlogSubCategory",GetBlogSubCategory);
app.use("/AddBlog",AddBlog);
app.use("/GetBlog",GetBlog);
app.use("/UpdateBlog",UpdateBlog);
app.use("/DeleteBlog",DeleteBlog);
app.use("/RegisterCustomer",RegisterCustomer);
app.use("/AddUserLoginSession",AddUserLoginSession);
app.use("/CustomerLoginAuth",CustomerLoginAuth);
app.use("/AddBlogComments",AddBlogComments);
app.use("/GetBlogComments",GetBlogComments);
app.use("/GetBlogCommentsToApprove",GetBlogCommentsToApprove);
app.use("/ApproveBlogComment",ApproveBlogComment);
app.use("/DeleteBlogComment",DeleteBlogComment);
app.use("/GetRegisteredCustomer",GetRegisteredCustomer);
app.use("/AddCustomerBlogLikeStatus",AddCustomerBlogLikeStatus);
app.use("/UpdateLikeCount",UpdateLikeCount);
app.use("/GetBlogCustomerLikedStatus",GetBlogCustomerLikedStatus);
app.use("/GetMarketer",GetMarketer);
app.use("/GetHealthCenterNutritionistMapping",GetHealthCenterNutritionistMapping);
app.use("/AddHealthCenterNutritionistMapping",AddHealthCenterNutritionistMapping);
app.use("/UpdateHealthCenterNutritionistMapping",UpdateHealthCenterNutritionistMapping);

app.use("/AddDevice",AddDevice);
app.use("/GetDevice",GetDevice);
app.use("/UpdateDevice",UpdateDevice);
app.use("/AddDeviceImageMapping",AddDeviceImageMapping);
app.use("/GetDeviceImage",GetDeviceImage);
app.use("/AddDeviceVendorMapping",AddDeviceVendorMapping);
app.use("/GetDeviceVendorMapping",GetDeviceVendorMapping);

app.use("/AddBook",AddBook);
app.use("/GetBooks",GetBooks);
app.use("/UpdateBook",UpdateBook);
app.use("/AddBookImageMapping",AddBookImageMapping);
app.use("/GetBookImage",GetBookImage);
app.use("/AddBookVendorMapping",AddBookVendorMapping);
app.use("/GetBookVendorMapping",GetBookVendorMapping);

app.use("/AddAllopathyMedicine",AddAllopathyMedicine);
app.use("/GetAllopathyMedicine",GetAllopathyMedicine);
app.use("/AddAllopathyImageMapping",AddAllopathyImageMapping);
app.use("/UpdateAllopathicMedicine",UpdateAllopathicMedicine);
app.use("/GetMedicineAllopathyImage",GetMedicineAllopathyImage);
app.use("/AddAllopathyVendorMapping",AddAllopathyVendorMapping);
app.use("/GetAllopathyVendorMapping",GetAllopathyVendorMapping);

app.use("/AddAyurvedicMedicine",AddAyurvedicMedicine);
app.use("/GetAyurvedicMedicine",GetAyurvedicMedicine);
app.use("/AddAyurvedicImageMapping",AddAyurvedicImageMapping);
app.use("/GetMedicineAyuvedicImage",GetMedicineAyuvedicMapping);
app.use("/UpdateAyurvedicMedicine",UpdateAyurvedicMedicine);
app.use("/GetMedicineAyuvedicImage",GetMedicineAyuvedicImage);
app.use("/AddAyurvedicVendorMapping",AddAyurvedicVendorMapping);
app.use("/GetAyurvedicVendorMapping",GetAyurvedicVendorMapping);

app.use("/AddFootCare",AddFootCare);
app.use("/GetFootCare",GetFootCare);
app.use("/AddFootCareImageMapping",AddFootCareImageMapping);
app.use("/AddFootCareSizeMapping",AddFootCareSizeMapping);
app.use("/GetFootCareImage",GetFootCareImage);
app.use("/UpdateFootCare",UpdateFootCare);
app.use("/GetFootCareSizeMapping",GetFootCareSizeMapping);
app.use("/AddFootcareVendorMapping",AddFootcareVendorMapping);
app.use("/GetFootcareVendorMapping",GetFootcareVendorMapping);

app.use("/AddVendor",AddVendor);
app.use("/AddVendorContactPerson",AddVendorContactPerson);
app.use("/GetVendor",GetVendor);
app.use("/UpdateVendor",UpdateVendor);
app.use("/GetVendorContactPerson",GetVendorContactPerson);
app.use("/UpdateVendorContactPerson",UpdateVendorContactPerson);

app.use("/AddOffer",AddOffer);
app.use("/UpdateOffer",UpdateOffer);
app.use("/GetOffer",GetOffer);

app.use("/AddDiagnosticTest",AddDiagnosticTest);
app.use("/UpdateDiagnosticTest",UpdateDiagnosticTest);
app.use("/GetDiagnosticTest",GetDiagnosticTest);
app.use("/AddDiagnosticTestFaqMapping",AddDiagnosticTestFaqMapping);
app.use("/GetDaignosticTestFaqMapping",GetDaignosticTestFaqMapping);

app.use("/GetHealthCenterDoctoMapping",GetHealthCenterDoctoMapping);
app.use("/AddHealthCenterDoctorMapping",AddHealthCenterDoctorMapping);
app.use("/UpdateHealthCenterDoctorMapping",UpdateHealthCenterDoctorMapping);

app.use("/AddFood",AddFood);
app.use("/AddFoodImageMapping",AddFoodImageMapping);
app.use("/GetFood",GetFood);
app.use("/GetFoodImage",GetFoodImage);
app.use("/UpdateFood",UpdateFood);
app.use("/AddFoodVendorMapping",AddFoodVendorMapping);
app.use("/GetFoodVendorMapping",GetFoodVendorMapping);

app.use("/GetBlogBackend",GetBlogBackend);

app.use("/AddImage", AddImage);
app.use("/AddPdf", AddPdf);

app.use("/UrlToBase64", UrlToBase64);


app.use("/AddSaltMaster",AddSaltMaster);
app.use("/GetSaltMaster",GetSaltMaster);
app.use("/UpdateSaltMaster",UpdateSaltMaster);
app.use("/DeleteSaltMaster",DeleteSaltMaster);
app.use("/AddContributor",AddContributor);
app.use("/UpdateContributor",UpdateContributor);
app.use("/GetContributor",GetContributor);
app.use("/GetHealthCenterContactPerson",GetHealthCenterContactPerson);
app.use("/AddHealthCenterContactPerson",AddHealthCenterContactPerson);
app.use("/UpdateHealthCenterContactPerson",UpdateHealthCenterContactPerson);
app.use("/AddOrder",AddOrder);
app.use("/AddOrderDetail",AddOrderDetail);
app.use("/GetNewOrders",GetNewOrders);
app.use("/GetOrderDetailData",GetOrderDetailData);
app.use("/AddOrderVendor",AddOrderVendor);
app.use("/GetVendorOrder",GetVendorOrder);
app.use("/UpdateShoppingCart",UpdateShoppingCart);
app.use("/DeleteShoppingCart",DeleteShoppingCart);
app.use("/DeleteShoppingCartItem",DeleteShoppingCartItem);
app.use("/AddWishlist",AddWishlist);
app.use("/GetWishlistData",GetWishlistData);
app.use("/DeleteWishlist",DeleteWishlist);
app.use("/DeleteWishlistItem",DeleteWishlistItem);
app.use("/UpdateWishlist",UpdateWishlist);
app.use("/CustomerOrderMailer",CustomerOrderMailer);


// ---------------------Web-----------------------

app.use("/GetDoctorWeb", GetDoctorWeb);
app.use("/GetBooksWeb", GetBooksWeb);
app.use("/GetFootCareWeb", GetFootCareWeb);
app.use("/GetDevicesWeb", GetDevicesWeb);
app.use("/GetAllopathicMedicineWeb", GetAllopathicMedicineWeb);
app.use("/GetAyurvedicMedicineWeb", GetAyurvedicMedicineWeb);
app.use("/GetNutritionistWeb", GetNutritionistWeb);
app.use("/GetBlogDetails", GetBlogDetails);
app.use("/GetDoctorDetailsWeb", GetDoctorDetailsWeb);
app.use("/GetDoctorHealthCenterWeb", GetDoctorHealthCenterWeb);
app.use("/GetLabWeb", GetLabWeb);

app.use("/GetNutritionistDetailsWeb", GetNutritionistDetailsWeb);
app.use("/GetNutritionistHealthCenterWeb", GetNutritionistHealthCenterWeb);
app.use("/GetLabDetailsWeb", GetLabDetailsWeb);
app.use("/GetLabBranchesWeb", GetLabBranchesWeb);
app.use("/GetBookDetailsWebsite", GetBookDetailsWebsite);
app.use("/GetFootDetailsWebsite", GetFootDetailsWebsite);
app.use("/GetShoppingCartData", GetShoppingCartData);
app.use("/GetDeviceDetailsWebsite", GetDeviceDetailsWebsite);
app.use("/GetAllopathyDetailsWebsite", GetAllopathyDetailsWebsite);
app.use("/GetAyuvedicDetailsWebsite", GetAyuvedicDetailsWebsite);
app.use("/GetFoodDetailsWebsite", GetFoodDetailsWebsite);
app.use("/GetFoodWeb", GetFoodWeb)
app.use("/GetHealthCenterDoctorWeb", GetHealthCenterDoctorWeb);
app.use("/GetHealthCenterNutritionistWeb", GetHealthCenterNutritionistWeb);


app.use("/AddShoppingCart", AddShoppingCart);
app.use("/AddShippingAddressCustomer", AddShippingAddressCustomer);
app.use("/GetShippingAddressCustomer", GetShippingAddressCustomer);
app.use("/AddCustomerPrescription", AddCustomerPrescription);


app.use("/GetBlogNine", GetBlogNine);
app.use("/GetNutritionistWebSix", GetNutritionistWebSix);
app.use("/GetDoctorWebSix", GetDoctorWebSix);
app.use("/GetBlogCategoryWebsite", GetBlogCategoryWebsite);
app.use("/GetBlogWithCategoryWebsite", GetBlogWithCategoryWebsite);
app.use("/GetEmailExistsCustomer", GetEmailExistsCustomer);
app.use("/GetSocialPosts", GetSocialPosts);

app.use("/GetDevicesWebNine", GetDevicesWebNine);
app.use("/GetFootCareWebNine", GetFootCareWebNine);
app.use("/GetBooksWebNine", GetBooksWebNine);

//-----------------------Web--------------



//-----------------------Mailers--------------
app.use("/CustomerRegistraionMailer", CustomerRegistraionMailer);
app.use("/VerifyMailMailer", VerifyMailMailer);
app.use("/IfEmailExists", IfEmailExists);
app.use("/ForgotPasswordMailer", ForgotPasswordMailer);
app.use("/UpdateCustomerPassword", UpdateCustomerPassword);
app.use("/GetBlogTags", GetBlogTags);
app.use("/ContactUsMailer",ContactUsMailer);

//-----------------------Mailers--------------

app.use("/TestDeleteImage",TestDeleteImage);
app.use("/VerifyMobileOTP",VerifyMobileOTP);
app.use("/CustomerRegistraionMobileOTP",CustomerRegistraionMobileOTP);







//-----------------------------------------New API -------------------------------------------------------------








app.use("/BackofficeApi/AuthenticateStaff",AuthenticateStaff_NewBackoffice);
app.use("/BackofficeApi/AddStaffLoginSession",AddStaffLoginSession_NewBackoffice);


app.use("/BackofficeApi/AddCompanyMaster",AddCompanyMaster_NewBackoffice);
app.use("/BackofficeApi/GetCompanyList",GetCompanyList_NewBackoffice);
app.use("/BackofficeApi/DeleteCompanyMaster",DeleteCompanyMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateCompanyLogo",UpdateCompanyLogo_NewBackoffice);
app.use("/BackofficeApi/UpdateCompanyMaster",UpdateCompanyMaster_NewBackoffice);

app.use("/BackofficeApi/AddBrandMaster",AddBrandMaster_NewBackoffice)
app.use("/BackofficeApi/GetBrandList",GetBrandList_NewBackoffice);
app.use("/BackofficeApi/DeleteBrandMaster",DeleteBrandMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBrandLogo",UpdateBrandLogo_NewBackoffice);
app.use("/BackofficeApi/UpdateBrandMaster",UpdateBrandMaster_NewBackoffice);

app.use("/BackofficeApi/AddFoodCategoryMaster",AddFoodCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryList",GetFoodCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteFoodCategoryMaster",DeleteFoodCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodCategoryMaster",UpdateFoodCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddFootwearTypeMaster",AddFootwearTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwareTypeList",GetFootwareTypeList_NewBackoffice);
app.use("/BackofficeApi/DeleteFootwareTypeMaster",DeleteFootwareTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearTypeMaster",UpdateFootwearTypeMaster_NewBackoffice);

app.use("/BackofficeApi/AddFoodFilterMaster",AddFoodFilterMaster_NewBackoffice)
app.use("/BackofficeApi/GetFoodFilterList",GetFoodFilterList_NewBackoffice);
app.use("/BackofficeApi/DeleteFoodFilterMaster",DeleteFoodFilterMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodFilterMaster",UpdateFoodFilterMaster_NewBackoffice);


app.use("/BackofficeApi/AddBookLanguageMaster",AddBookLanguageMaster_NewBackoffice);
app.use("/BackofficeApi/GetBookLanguageList",GetBookLanguageList_NewBackoffice);
app.use("/BackofficeApi/DeleteBookLanguageMaster",DeleteBookLanguageMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBookLanguageMaster",UpdateBookLanguageMaster_NewBackoffice);

app.use("/BackofficeApi/AddBookCategoryMaster",AddBookCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetBookCategoryList",GetBookCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteBookCategoryMaster",DeleteBookCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBookCategoryMaster",UpdateBookCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddDeviceCategoryMaster",AddDeviceCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetDeviceCategoryList",GetDeviceCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteDeviceCategoryMaster",DeleteDeviceCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateDeviceCategoryMaster",UpdateDeviceCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddDeviceFilterMaster",AddDeviceFilterMaster_NewBackoffice);
app.use("/BackofficeApi/GetDeviceFilter",GetDeviceFilter_NewBackoffice);
app.use("/BackofficeApi/DeleteDeviceFilterMaster",DeleteDeviceFilterMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateDeviceFilterMaster",UpdateDeviceFilterMaster_NewBackoffice);

app.use("/BackofficeApi/AddFootwearColorMaster",AddFootwearColorMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwareColorList",GetFootwareColorList_NewBackoffice);
app.use("/BackofficeApi/DeleteFootwareColorMaster",DeleteFootwareColorMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearColorMaster",UpdateFootwearColorMaster_NewBackoffice);

app.use("/BackofficeApi/AddFootwearSizeMaster",AddFootwearSizeMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwareSizeList",GetFootwareSizeList_NewBackoffice);
app.use("/BackofficeApi/DeleteFootwareSizeMaster",DeleteFootwareSizeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearSizeMaster",UpdateFootwearSizeMaster_NewBackoffice);

app.use("/BackofficeApi/AddSocksSizeMaster",AddSocksSizeMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksSizeList",GetSocksSizeList_NewBackoffice);
app.use("/BackofficeApi/DeleteSocksSizeMaster",DeleteSocksSizeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksSizeMaster",UpdateSocksSizeMaster_NewBackoffice);

app.use("/BackofficeApi/AddSaltMaster",AddSaltMaster_NewBackoffice);
app.use("/BackofficeApi/GetSaltList",GetSaltList_NewBackoffice);
app.use("/BackofficeApi/DeleteSaltMaster",DeleteSaltMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSaltMaster",UpdateSaltMaster_NewBackoffice);

app.use("/BackofficeApi/AddPackagingTypeMaster",AddPackagingTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetPackagingTypeList",GetPackagingTypeList_NewBackoffice);
app.use("/BackofficeApi/DeletePackagingTypeMaster",DeletePackagingTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdatePackagingTypeMaster",UpdatePackagingTypeMaster_NewBackoffice);

app.use("/BackofficeApi/AddDosageFormMaster",AddDosageFormMaster_NewBackoffice);
app.use("/BackofficeApi/GetDosageFormList",GetDosageFormList_NewBackoffice);
app.use("/BackofficeApi/DeleteDosageFormMaster",DeleteDosageFormMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateDosageFormMaster",UpdateDosageFormMaster_NewBackoffice);

app.use("/BackofficeApi/AddMedicineCategoryMaster",AddMedicineCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetMedicineCategoryList",GetMedicineCategoryList_NewBackoffice);
app.use("/BackofficeApi/DeleteMedicineCategoryMaster",DeleteMedicineCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddTagMaster",AddTagMaster_NewBackoffice);
app.use("/BackofficeApi/GetTagMasterList",GetTagMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteTagMaster",DeleteTagMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateTagMaster",UpdateTagMaster_NewBackoffice);

app.use("/BackofficeApi/AddArticleCategoryMaster",AddArticleCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetArticleCategoryMasterList",GetArticleCategoryMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteArticleCategoryMaster",DeleteArticleCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateArticleCategoryMaster",UpdateArticleCategoryMaster_NewBackoffice);

app.use("/BackofficeApi/AddArticleSubCategoryMaster",AddArticleSubCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/GetArticleSubCategoryMasterList",GetArticleSubCategoryMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteArticleSubCategoryMaster",DeleteArticleSubCategoryMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateArticleSubCategoryMaster",UpdateArticleSubCategoryMaster_NewBackoffice);


app.use("/BackofficeApi/AddFlavourMaster",AddFlavourMaster_NewBackoffice);
app.use("/BackofficeApi/GetFlavourMaster",GetFlavourMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteFlavourMaster",DeleteFlavourMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFlavourMaster",UpdateFlavourMaster_NewBackoffice);



app.use("/BackofficeApi/GetCompany",GetCompany_NewBackoffice);
app.use("/BackofficeApi/GetDepartment",GetDepartment_NewBackoffice);
app.use("/BackofficeApi/GetDesignation",GetDesignation_NewBackoffice);
app.use("/BackofficeApi/GetUserType",GetUserType_NewBackoffice);
app.use("/BackofficeApi/GetCountry",GetCountry_NewBackoffice);
app.use("/BackofficeApi/GetState",GetState_NewBackoffice);
app.use("/BackofficeApi/GetCity",GetCity_NewBackoffice);


app.use("/BackofficeApi/ChangePassword",ChangePassword_NewBackoffice);
app.use("/BackofficeApi/GetStaff",GetStaff_NewBackoffice);

app.use("/BackofficeApi/AddStaff",AddStaff_NewBackoffice);
app.use("/BackofficeApi/UpdateStaff",UpdateStaff_NewBackoffice);

app.use("/BackofficeApi/AddContributor",AddContributor_NewBackoffice);
app.use("/BackofficeApi/UpdateContributor",UpdateContributor_NewBackoffice);
app.use("/BackofficeApi/GetContributors",GetContributors_NewBackoffice);
app.use("/BackofficeApi/UpdateContributorPhoto",UpdateContributorPhoto_NewBackoffice);
app.use("/BackofficeApi/GetArticleCategory",GetArticleCategory_NewBackoffice);
app.use("/BackofficeApi/GetArticleSubCategory",GetArticleSubCategory_NewBackoffice);
app.use("/BackofficeApi/GetArticleTags",GetArticleTags_NewBackoffice);
app.use("/BackofficeApi/GetBlogContributors",GetBlogContributors_NewBackoffice);

app.use("/BackofficeApi/AddArticle",AddArticle_NewBackoffice);
app.use("/BackofficeApi/GetArticleList",GetArticleList_NewBackoffice);
app.use("/BackofficeApi/AddArticleTagMapping",AddArticleTagMapping_NewBackoffice);

app.use("/BackofficeApi/UpdateArticlePreviewPhoto",UpdateArticlePreviewPhoto_NewBackoffice);
app.use("/BackofficeApi/UpdateArticleCoverPhoto",UpdateArticleCoverPhoto_NewBackoffice);


app.use("/BackofficeApi/GetQualification",GetQualification_NewBackoffice);
app.use("/BackofficeApi/GetSpecialisation",GetSpecialisation_NewBackoffice);

app.use("/BackofficeApi/AddDoctor",AddDoctor_NewBackoffice);
app.use("/BackofficeApi/AddDoctorQualificationMapping",AddDoctorQualificationMapping_NewBackoffice);
app.use("/BackofficeApi/AddDoctorSpecialisationMapping",AddDoctorSpecialisationMapping_NewBackoffice);
app.use("/BackofficeApi/AddDoctorCertificateMapping",AddDoctorCertificateMapping_NewBackoffice);

app.use("/BackofficeApi/UpdateDoctorPhoto",UpdateDoctorPhoto_NewBackoffice);
app.use("/BackofficeApi/UpdateDoctorConsent",UpdateDoctorConsent_NewBackoffice);
app.use("/BackofficeApi/UpdateDoctorPdf",UpdateDoctorPdf_NewBackoffice);


app.use("/BackofficeApi/AddDietitian",AddDietitian_NewBackoffice);
app.use("/BackofficeApi/AddDietitianQualificationMapping",AddDietitianQualificationMapping_NewBackoffice);
app.use("/BackofficeApi/AddDietitianCertificateMapping",AddDietitianCertificateMapping_NewBackoffice);

app.use("/BackofficeApi/UpdateDietitianPhoto",UpdateDietitianPhoto_NewBackoffice);
app.use("/BackofficeApi/UpdateDietitianConsent",UpdateDietitianConsent_NewBackoffice);
app.use("/BackofficeApi/UpdateDietitianPdf",UpdateDietitianPdf_NewBackoffice);

app.use("/BackofficeApi/GetHealthCenterFacilities",GetHealthCenterFacilities_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterServices",GetHealthCenterServices_NewBackoffice);


app.use("/BackofficeApi/AddHealthCenter",AddHealthCenter_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterServicesMapping",AddHealthCenterServicesMapping_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterFacilitiesMappings",AddHealthCenterFacilitiesMapping_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterTimingsMapping",AddHealthCenterTimingsMapping_NewBackoffice);
app.use("/BackofficeApi/UpdateStaffPhoto",UpdateStaffPhoto_NewBackoffice);

app.use("/BackofficeApi/UpdateArticle",UpdateArticle_NewBackoffice);

app.use("/BackofficeApi/GetDoctorList",GetDoctorList_NewBackoffice);
app.use("/BackofficeApi/UpdateDoctor",UpdateDoctor_NewBackoffice);
app.use("/BackofficeApi/DeleteDoctorCertificate",DeleteDoctorCertificate_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterList",GetHealthCenterList_NewBackoffice);

app.use("/BackofficeApi/UpdateHealthCenter",UpdateHealthCenter_NewBackoffice);
app.use("/BackofficeApi/GetDietitianList",GetDietitianList_NewBackoffice);

app.use("/BackofficeApi/UpdateDietitian",UpdateDietitian_NewBackoffice);
app.use("/BackofficeApi/DeleteDietitianCertificate",DeleteDietitianCertificate_NewBackoffice);

app.use("/BackofficeApi/AddFoodItemMaster_FilterMapping",AddFoodItemMaster_FilterMapping_NewBackoffice);
app.use("/BackofficeApi/GetFoodItemMaster",GetFoodItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetBookItemMaster",GetBookItemMaster_NewBackoffice);



app.use("/BackofficeApi/GetBrandData",GetBrandData_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryData",GetFoodCategoryData_NewBackoffice);
app.use("/BackofficeApi/GetFoodFilterData",GetFoodFilterData_NewBackoffice);
app.use("/BackofficeApi/GetFoodFlavourData",GetFoodFlavourData_NewBackoffice);
app.use("/BackofficeApi/GetGstData",GetGstData_NewBackoffice);
app.use("/BackofficeApi/GetBookCategoryData",GetBookCategoryData_NewBackoffice);


app.use("/BackofficeApi/AddFootwearItemMaster",AddFootwearItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwearItemMaster",GetFootwearItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetFootwearTypeMaster",GetFootwearTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearItemMaster",UpdateFootwearItemMaster_NewBackoffice);


app.use("/BackofficeApi/AddSocksItemMaster",AddSocksItemMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksItemMaster",GetSocksItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksItemMaster",UpdateSocksItemMaster_NewBackoffice);

app.use("/BackofficeApi/GetPackagingTypeData",GetPackagingTypeData_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterData",GetHealthCenterData_NewBackoffice);

app.use("/BackofficeApi/AddHealthCenterDietitianMapping",AddHealthCenterDietitianMapping_NewBackoffice);
app.use("/BackofficeApi/AddHealthCenterDoctorMapping",AddHealthCenterDoctorMapping_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterDietitianMapping",DeleteHealthCenterDietitianMapping_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterDoctorMapping",DeleteHealthCenterDoctorMapping_NewBackoffice);

app.use("/BackofficeApi/AddSocksTypeMaster",AddSocksTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksTypeMaster",GetSocksTypeMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksTypeMasterGrid",GetSocksTypeMasterGrid_NewBackoffice);
app.use("/BackofficeApi/DeleteSocksTypeMaster",DeleteSocksTypeMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksTypeMaster",UpdateSocksTypeMaster_NewBackoffice);

app.use("/BackofficeApi/GetHealthCenterDietitianMappingList",GetHealthCenterDietitianMappingList_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterDoctorMappingList",GetHealthCenterDoctorMappingList_NewBackoffice);

app.use("/BackofficeApi/AddHealthCenterFacilitiesMaster",AddHealthCenterFacilitiesMaster_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterFacilitiesMaster",GetHealthCenterFacilitiesMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterFacilitiesMaster",DeleteHealthCenterFacilitiesMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateHealthCenterFacilitiesMaster",UpdateHealthCenterFacilitiesMaster_NewBackoffice);


app.use("/BackofficeApi/AddHealthCenterServicesMaster",AddHealthCenterServicesMaster_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterServicesMaster",GetHealthCenterServicesMaster_NewBackoffice);
app.use("/BackofficeApi/DeleteHealthCenterServicesMaster",DeleteHealthCenterServicesMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateHealthCenterServicesMaster",UpdateHealthCenterServicesMaster_NewBackoffice);


app.use("/BackofficeApi/GetCareer",GetCareer_NewBackoffice);
app.use("/BackofficeApi/AddCareer",AddCareer_NewBackoffice);
app.use("/BackofficeApi/UpdateCareer",UpdateCareer_NewBackoffice);


app.use("/BackofficeApi/GetFootwearColorData",GetFootwearColorData_NewBackoffice);
app.use("/BackofficeApi/GetFootwearSizeData",GetFootwearSizeData_NewBackoffice);

app.use("/BackofficeApi/GetSocksSizeData",GetSocksSizeData_NewBackoffice);
app.use("/BackofficeApi/GetSocksColorData",GetSocksColorData_NewBackoffice);


app.use("/BackofficeApi/AddFootwearVariant",AddFootwearVariant_NewBackoffice);
app.use("/BackofficeApi/AddFootwearVariantImage",AddFootwearVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddFootwearVariantVendorPricing",AddFootwearVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/GetFootwearVariantList",GetFootwearVariantList_NewBackoffice);

//-------------------------Web----------------------------------------------

app.use("/BackofficeApi/AddFoodItemMaster",AddFoodItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodItemMaster",UpdateFoodItemMaster_NewBackoffice);
app.use("/BackofficeApi/AddBookItemMaster",AddBookItemMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateBookItemMaster",UpdateBookItemMaster_NewBackoffice);


app.use("/BackofficeApi/AddFoodVariant",AddFoodVariant_NewBackoffice);
app.use("/BackofficeApi/AddFoodVariantImage",AddFoodVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddFoodVariantVendorPricing",AddFoodVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/GetVendorData",GetVendorData_NewBackoffice);
app.use("/BackofficeApi/GetFoodVariantList",GetFoodVariantList_NewBackoffice);

app.use("/BackofficeApi/GetBookTypeData",GetBookTypeData_NewBackoffice);
app.use("/BackofficeApi/GetBookLanguageData",GetBookLanguageData_NewBackoffice);

app.use("/BackofficeApi/AddBookVariant",AddBookVariant_NewBackoffice);
app.use("/BackofficeApi/AddBookVariantImage",AddBookVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddBookVariantVendorPricing",AddBookVariantVendorPricing_NewBackoffice);

app.use("/BackofficeApi/GetBookVariantList",GetBookVariantList_NewBackoffice);

//-------------------------Web----------------------------------------------
app.use("/BackofficeApi/GetBlogNine",GetBlogNine_NewBackoffice);
app.use("/BackofficeApi/GetDoctorWebSix",GetDoctorWebSix_NewBackoffice);
app.use("/BackofficeApi/GetNutritionistWebSix",GetNutritionistWebSix_NewBackoffice);
app.use("/BackofficeApi/GetDoctorWeb",GetDoctorWeb_NewBackoffice);
app.use("/BackofficeApi/GetNutritionistWeb",GetNutritionistWeb_NewBackoffice);
app.use("/BackofficeApi/GetDoctorDetailsWeb",GetDoctorDetailsWeb_NewBackoffice);
app.use("/BackofficeApi/GetSocialPosts",GetSocialPosts_NewBackoffice);
app.use("/BackofficeApi/GetNutritionistDetailsWeb",GetNutritionistDetailsWeb_NewBackoffice);
app.use("/BackofficeApi/GetBlogCategoryWebsite",GetBlogCategoryWebsite_NewBackoffice);
app.use("/BackofficeApi/GetBlogDetails",GetBlogDetails_NewBackoffice);
app.use("/BackofficeApi/GetBlogWithCategoryWebsite",GetBlogWithCategoryWebsite_NewBackoffice);
app.use("/BackofficeApi/GetContributorDetailsWebsite",GetContributorDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetContributorsWebsite",GetContributorsWebsite_NewBackoffice);
app.use("/BackofficeApi/IfEmailExists",IfEmailExists_NewBackoffice);
app.use("/BackofficeApi/VerifyMailMailer",VerifyMailMailer_NewBackoffice);
app.use("/BackofficeApi/VerifyMobileOTP",VerifyMobileOTP_NewBackoffice);
app.use("/BackofficeApi/RegisterCustomer",RegisterCustomer_NewBackoffice);
app.use("/BackofficeApi/CustomerRegistrationMailer",CustomerRegistrationMailer_NewBackoffice);
app.use("/BackofficeApi/CustomerRegistrationMobileOTP",CustomerRegistrationMobileOTP_NewBackoffice);
app.use("/BackofficeApi/AddUserLoginSession",AddUserLoginSession_NewBackoffice);
app.use("/BackofficeApi/ForgotPasswordMailer",ForgotPasswordMailer_NewBackoffice);
app.use("/BackofficeApi/UpdateCustomerPassword",UpdateCustomerPassword_NewBackoffice);
app.use("/BackofficeApi/CustomerLoginAuth",CustomerLoginAuth_NewBackoffice);
app.use("/BackofficeApi/AddCustomerBlogLikeStatus",AddCustomerBlogLikeStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateLikeCount",UpdateLikeCount_NewBackoffice);
app.use("/BackofficeApi/AddCustomerBlogLikedStatus",AddCustomerBlogLikeStatus_NewBackoffice);
app.use("/BackofficeApi/GetBlogCustomerLikedStatus",GetBlogCustomerLikedStatus_NewBackoffice);
app.use("/BackofficeApi/GetBlogComments",GetBlogComments_NewBackoffice);
app.use("/BackofficeApi/AddBlogComments",AddBlogComments_NewBackoffice);
app.use("/BackofficeApi/GetBlogTags",GetBlogTags_NewBackoffice);
//-----------------------------------------New API -------------------------------------------------------------


module.exports = app;