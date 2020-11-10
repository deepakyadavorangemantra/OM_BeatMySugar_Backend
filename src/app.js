const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var multipart = require('connect-multiparty');


const CustomerAuthMobile_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerAuthMobile")
const CustomerLoginAuth_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerLoginAuth")
const GetUserInfoEmail_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetUserInfoEmail")

// ---------------------------- Mailers ------------------------------






//-----------------------------------------New API -------------------------------------------------------------






//----------- AUTH-----------------

const AuthenticateStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/AuthenticateStaff")
const VendorAuth_NewBackoffice = require("./api/routes/Backoffice-New-Api/VendorAuth")
const IfMobileExists_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/IfMobileExists")

//----------- ADD ------------------

const AddStaffLoginSession_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddStaffLoginSession")
const AddStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddStaff")

const AddCompanyMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/GetChapterMasterList")
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
const AddSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksVariant")
const AddSocksVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksVariantImage")
const AddSocksVariantVendorPricing_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksVariantVendorPricing")
const AddVendor_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendor")
const AddVendorFacilitiesMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorFacilitiesMapping")
const AddVendorLicenseMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorLicenseMapping")
const AddVendorAccreditationmapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorAccreditationmapping")
const AddVendorTimingMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorTimingMapping")
const AddVendorContactPersonMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorContactPersonMapping")
const AddSocksColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSocksColorMaster")
const UpdateVendor_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendor")
const AddVendorLicenseMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorLicenseMaster")
const AddAccreditationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddAccreditationMaster")
const AddVendorFacilityMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorFacilityMaster")
const AddQualificationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddQualificationMaster")
const AddSpecializationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSpecialisationMaster")
const AddOffer_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddOffer")
const AddUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserAddressMapping")
const AddOrder_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddOrder")
const AddOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddOrderDetail")
const AddSellWithUs_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSellWithUs")
const AddInsurance_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddInsurance")
const AddUserFamilyInfoMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserFamilyInfoMapping")
const Add_ReturnMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Add_ReturnMaster")






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
const GetSocksVariantList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksVariantList")
const GetVendorFacilitiesData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFacilitiesData")
const GetVendorLicenseData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorLicenseData")
const GetVendorAccreditationData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorAccreditationData")
const GetVendorList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorList")
const GetUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserAddressMapping")

const GetOrderVendor_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOrderVendor")

const GetVendorOrderById_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorOrderByID")
const GetSellWithUs_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSellWithUs")
const GetInsurance_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetInsurance")
const GetCareerByID_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCareerByID")
const GetUserInfoByID_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserInfoByID")






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
const GetSocksColorMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksColorMasterList")
const GetVendorLicenseMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorLicenseMasterList")
const GetAccreditationMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetAccreditationMasterList")
const GetVendorFacilitiesMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFacilitiesMasterList")
const GetQualificationMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetQualificationMasterList")
const GetSpecializationMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSpecialisationMasterList")
const GetUserInfoData_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserInfoData")
const GetOffer_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOffer")
const GetHealthCenterDoctorMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDoctorMapping")
const GetHealthCenterDietitianMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetHealthCenterDietitianMapping")
const IfEmailExistsSocial_NewBackoffice = require("./api/routes/Backoffice-New-Api/IfEmailExistsSocial")
const GetCareerWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCareerWebsite")

const GetUserMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserMenu")
const GetUserSubMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserSubMenu")

const GetMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetMenuList")
const GetSubMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSubMenuList")

const AddUserMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserMenu")
const AddUserSubMenu_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddUserSubMenu")

const GetUserSubMenuAccessRights_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserSubMenuAccessRights")


const GetUserMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserMenuList")
const GetUserSubMenuList_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetUserSubMenuList")


const UpdateMenuRights_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateMenuRights")
const UpdateSubMenuRights_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSubMenuRights")

//-------------- UPDATE ---------------
const ChangeVendorPassword_NewBackoffice = require("./api/routes/Backoffice-New-Api/ChangeVendorPassword")
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
const UpdateVendorCheque_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorCheque")
const UpdateVendorLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorLogo")
const UpdateSocksColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksColorMaster")
const UpdateVendorLicenseMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorLicenseMaster")
const UpdateAccreditationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccreditationMaster")
const UpdateAccreditationMasterLogo_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateAccreditationMasterLogo")
const UpdateFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodVariant")
const UpdateBookVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBookVariant")
const UpdateFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearVariant")
const UpdateSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksVariant")
const UpdateVendorFacilitiesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorFacilitiesMaster")
const UpdateQualificationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateQualificationMaster")
const UpdateSpecializationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSpecialisationMaster")
const UpdateDoctorApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDoctorApprovalStatus")
const UpdateDietitianApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateDietitianApprovalStatus")
const UpdateHealthCenterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateHealthCenterApprovalStatus")
const UpdateVendorApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateVendorApprovalStatus")
const UpdateFoodItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodItemMasterApprovalStatus")
const UpdateFootwearItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearItemMasterApprovalStatus")
const UpdateBooksItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBooksItemMasterApprovalStatus")
const UpdateSocksItemMasterApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksItemMasterApprovalStatus")
const UpdateFoodVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFoodVariantApprovalStatus")
const UpdateFootwearVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateFootwearVariantApprovalStatus")
const UpdateBookVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateBooksItemMasterApprovalStatus")
const UpdateSocksVariantApprovalStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateSocksVariantApprovalStatus")
const UpdateOffer_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateOffer")
const UpdateUserInfoBasic_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateUserInfoBasic")

const UpdateUserDiabeticProfile_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateUserDiabeticProfile")

const Updateblogpublish_NewBackoffice = require("./api/routes/Backoffice-New-Api/Updateblogpublish")


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
// const DeleteHealthCenterServicesMaster_NewBackoffice =  require("./api/routes/Backoffice-New-Api/DeleteHealthCenterServicesMaster")
const DeleteHealthCenterDoctorMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterDoctorMapping")
const DeleteHealthCenterDietitianMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterDietitianMapping")
const DeleteSocksColorMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSocksColorMaster")
const DeleteVendorLicenseMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteVendorLicenseMaster")
const DeleteAccreditationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteAccreditationMaster")
const DeleteFoodVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFoodVariantImage")
const DeleteBookVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteBookVariantImage")
const DeleteFootwearVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteFootwearVariantImage")
const DeleteSocksVariantImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSocksVariantImage")
const DeleteHealthCenterServicesMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteHealthCenterServicesMaster")
const DeleteQualificationMaster_NewBackoffice  = require("./api/routes/Backoffice-New-Api/DeleteQualificationMaster")
const DeleteSpecializationMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteSpecialisationMaster")
const DeleteVendorFacilityMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteVendorFacilityMaster")
const DeleteUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteUserAddressMapping")
const DeleteUserFamilyInfoMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/DeleteUserFamilyInfoMapping")




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


const AddCustomerBlogLikeStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddCustomerBlogLikeStatus")
const UpdateLikeCount_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateLikeCount")
const GetBlogCustomerLikedStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogCustomerLikedStatus")
const GetBlogComments_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogComments")
const AddBlogComments_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddBlogComments")
const GetBlogTags_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogTags")


const GetFootwearListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearListing")
const GetFootwearBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearBrandData")
const GetFoodCategoryWebsiteData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodCategoryWebsiteData")
const GetFoodListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodListing")

const GetSocksListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksListing")
const GetSocksBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksBrandData")

const GetFootwearMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearMasterDetailsWebsite")
const GetFootwearVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearVariantDetailsWebsite")
const GetFootwearGenderListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearGenderListingWebsite")

const GetSocksMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksMasterDetailsWebsite")
const GetSocksVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksVariantDetailsWebsite")
const GetSocksGenderListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksGenderListingWebsite")


const GetFilterFootwearListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFilterFootwearListing")

const GetFilterSocksListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFilterSocksListing")
const GetFoodBrandData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodBrandData")
const GetFoodFlavourDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodFlavourDataFilter")
const GetFoodFilterDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodFilterDataFilter")
const GetFoodPriceDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodPriceDataFilter")

const GetFoodMasterDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodMasterDetailsWebsite")
const GetFoodCategoryListingWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodCategoryListingWebsite")
const GetFoodVariantDetailsWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodVariantDetailsWebsite")
const GetFilterFoodListing_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFilterFoodListing")

const AddShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddShoppingCart")

const GetCartFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFoodVariant")
const GetCartSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartSocksVariant")
const GetCartFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFootwearVariant")
const GetCartFoodVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFoodVariantCookie")
const GetCartSocksVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartSocksVariantCookie")
const GetCartFootwearVariantCookie_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCartFootwearVariantCookie")

const DeductShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeductShoppingCart")
const DeleteItemShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeleteItemShoppingCart")

const ClearShoppingCart_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/ClearShoppingCart")
const GetExtraCharges_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetExtraCharges")
const GetOfferWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetOfferWebsite")

const GetAddressCustomer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetAddressCustomer")

const GetNewOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNewOrders")
const GetOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetOrderDetail")
const GetFoodOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodOrderDetail")
const GetSocksOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksOrderDetail")
const GetFootwearOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearOrderDetail")

const CustomerOrderMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/CustomerOrderMailer")
const VendorOrderMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VendorOrderMailer")
//-----------------------------------------New API -------------------------------------------------------------

//---------------------------Vendor-------------------------

const AddVendorOrder_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorOrder")
const AddVendorOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddVendorOrderDetail")
const GetVendorById_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorById")


const GetVendorOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorOrderDetail")
const GetVendorFootwearOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFootwearOrderDetail")
const GetVendorFoodOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorFoodOrderDetail")
const GetVendorSocksOrderDetail_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorSocksOrderDetail")

const AddWishlist_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddWishlist")
const DeleteItemWishlist_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeleteItemWishlist")

const GetWishlistFoodVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetWishlistFoodVariant")
const GetWishlistFootwearVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetWishlistFootwearVariant")
const GetWishlistSocksVariant_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetWishlistSocksVariant")

const GetFootwearSizeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearSizeDataWebsite")
const GetFootwearColorDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearColorDataWebsite")
const GetFootwearTypeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearTypeDataWebsite")
const GetFootwearPriceDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearPriceDataFilter")



const GetSocksSizeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksSizeDataWebsite")
const GetSocksColorDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksColorDataWebsite")
const GetSocksTypeDataWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksTypeDataWebsite")
const GetSocksPriceDataFilter_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksPriceDataFilter")

const GetFoodHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodHomePageWebsite")
const GetFootwearHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearHomePageWebsite")
const GetSocksHomePageWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksHomePageWebsite")

const AddTransactionLog_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/AddTransactionLog")
const Response_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/Response")
const PaymentResponse_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/PaymentResponse")

const UpdateCustomerPhoto_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateCustomerPhoto")

const GetHealthCenterDoctorWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetHealthCenterDoctorWeb")
const GetDoctorHealthCenterWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetDoctorHealthCenterWeb")
const GetHealthCenterNutritionistWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetHealthCenterNutritionistWeb")

const Get_UserFamilyInfoByIDWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/Get_UserFamilyInfoByID")
const DeleteCustomerAddress_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/DeleteCustomerAddress")

const UpdateUserAddressMapping_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateUserAddressMapping")
const GetOrderHistoryWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetOrderHistoryWebsite")

const GetNutritionistHealthCenterWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetNutritionistHealthCenterWeb")


const GetFoodVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodVendorDataAssign")
const GetFootwearVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearVendorDataAssign")
const GetSocksVendorDataAssign_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksVendorDataAssign")


const GetBlogSearchWebsite_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetBlogSearchWebsite")
const ContactUsMailer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/ContactUsMailer")

const GetFoodListingSearchPageWeb_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodListingSearchPageWeb")
const GetCustomerEmailDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetCustomerEmailDetails")
const VerifyEmail_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/VerifyEmail")
const UpdateOrderConfirmationStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/UpdateOrderConfirmationStatus")



const Get_TcsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_TcsMaster")
const Get_TdsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_TdsMaster")
const Update_TdsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Update_TdsMaster")
const Update_TcsMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Update_TcsMaster")

const GetSplitOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSplitOrders")
const GetSettleOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSettleOrders")

const AddSplitOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddSplitOrders")

const GetSplitOrderDetails_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSplitOrderDetails")
const AddPaymentRelease_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddPaymentRelease")

const Get_OrderVendorByOrderID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_OrderVendorByOrderID")
const Get_OrderVendorDetailByOrderVendorID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_OrderVendorDetailByOrderVendorID")
const Get_FoodProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_FoodProductByOrderVendorDetailID")
const Get_FootWearProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_FootWearProductByOrderVendorDetailID")
const Get_SocksProductByOrderVendorDetailID_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_SocksProductByOrderVendorDetailID")
const Get_BackOfficeDashboardCount_ByDate_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_BackOfficeDashboardCount_ByDate")
const Get_BackOfficeDashboardTop5Customer_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_BackOfficeDashboardTop5Customer")
const Get_BackOfficeDashboardTop5Order_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_BackOfficeDashboardTop5Order")


const GetSocksMetaData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetSocksMetaData")
const GetFoodMetaData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFoodMetaData")
const GetFootwearMetaData_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetFootwearMetaData")


const Get_ReturnMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/Get_ReturnMaster")
const GetRefundOrdersForRelease_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetRefundOrdersForRelease")
const UpdateReturnStatus_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateReturnStatus")
const GetPaymentSplitFromOrder_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetPaymentSplitFromOrder")
const AddPaymentRefund_NewBackoffice = require("./api/routes/Backoffice-New-Api/AddPaymentRefund")

const GetNewOrderForVerify_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetNewOrderForVerify")
const VerifyOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/VerifyOrders")

const GetDashboarshMonthWiseOrdersSales_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetDashboarshMonthWiseOrdersSales")
const GetBlogAll_NewBackoffice = require("./api/routes/Backoffice-New-Api/Web/GetBlogAll")

const GetCancelOrders_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCancelOrders")


const UpdateCODServiceMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/UpdateCODServiceMaster")
const GetCodMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCodMaster")

const GetOrderDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOrderDataReports")
const GetCustomerDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetCustomerDataReports")

const GetFoodProductDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFoodProductDataReports")
const GetFootwearProductDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetFootwearProductDataReports")
const GetSocksProductDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetSocksProductDataReports")

const GetVendorDataReports_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetVendorDataReports")
const GetOrderDetailDataReport_NewBackoffice = require("./api/routes/Backoffice-New-Api/GetOrderDetailDataReport")


const ForgotPasswordStaff_NewBackoffice = require("./api/routes/Backoffice-New-Api/ForgotPasswordStaff")
const ChangePasswordByAdmin_NewBackoffice = require("./api/routes/Backoffice-New-Api/ChangePasswordByAdmin")

//------------------------------------- Education Module -------------------------------------//

const GetChapterMasterList_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/GetChapterMasterList")

const AddTopic_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/AddTopic");
const ListTopic_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/ListTopic");
const DeleteTopic_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/DeleteTopic");
const UpdateTopic_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/UpdateTopic");

const AddChapterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/AddChapterMaster")
const UpdateChapterMasterBgImage_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/UpdateChapterMasterBgImage")
const DeleteChapterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/DeleteChapterMaster")
const UpdateChapterMaster_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/UpdateChapterMaster")

const AddQuestion_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/AddQuestion");
const AddQuestionWithOption_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/AddQuestion");
const ListQuestion_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/ListQuestion");
const ListQuestionById_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/ListQuestionById");
const ListQuestionAll_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/ListQuestionAll");
const DeleteQuestion_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/DeleteQuestion");
const UpdateQuestion_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/UpdateQuestion");
// const UpdateQuestionAnswer_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/UpdateQuestionAnswer");

const AddOption_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/AddOption");
const ListOption_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/ListOption");
const DeleteOption_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/DeleteOption");
const UpdateOption_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/UpdateOption");

const AddCongratulation_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/AddCongratulation");
const ListCongratulation_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/ListCongratulation");
const DeleteCongratulation_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/DeleteCongratulation");
const UpdateCongratulation_NewBackoffice = require("./api/routes/Backoffice-New-Api/EducationModule/UpdateCongratulation");

const app = express();
app.use(bodyParser.json({limit: '50MB', extended: true}));
app.use(bodyParser.urlencoded({limit: '50MB', extended: true }));
app.use(cors());
app.use(multipart({
    maxFieldsSize: '50MB'
}));
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'mcg001k',saveUninitialized: true,resave: true}));
app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);




//-----------------------------------------New API -------------------------------------------------------------



app.use("/BackofficeApi/IfMobileExists",IfMobileExists_NewBackoffice);
app.use("/BackofficeApi/CustomerAuthMobile",CustomerAuthMobile_NewBackoffice);
app.use("/BackofficeApi/VerifyEmail",VerifyEmail_NewBackoffice);








app.use("/BackofficeApi/Add_ReturnMaster",Add_ReturnMaster_NewBackoffice);

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


app.use("/BackofficeApi/GetCareerByID",GetCareerByID_NewBackoffice);
app.use("/BackofficeApi/GetCareer",GetCareer_NewBackoffice);
app.use("/BackofficeApi/GetCareerWebsite",GetCareerWebsite_NewBackoffice);

app.use("/BackofficeApi/AddCareer",AddCareer_NewBackoffice);
app.use("/BackofficeApi/UpdateCareer",UpdateCareer_NewBackoffice);


app.use("/BackofficeApi/AddVendor",AddVendor_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorLogo",UpdateVendorLogo_NewBackoffice);
app.use("/BackofficeApi/AddVendorFacilitiesMapping",AddVendorFacilitiesMapping_NewBackoffice);
app.use("/BackofficeApi/AddVendorLicenseMapping",AddVendorLicenseMapping_NewBackoffice);
app.use("/BackofficeApi/AddVendorAccreditationmapping",AddVendorAccreditationmapping_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorCheque",UpdateVendorCheque_NewBackoffice);
app.use("/BackofficeApi/AddVendorTimingMapping",AddVendorTimingMapping_NewBackoffice);
app.use("/BackofficeApi/AddVendorContactPersonMapping",AddVendorContactPersonMapping_NewBackoffice);
app.use("/BackofficeApi/GetVendorList",GetVendorList_NewBackoffice);


app.use("/BackofficeApi/GetFootwearColorData",GetFootwearColorData_NewBackoffice);
app.use("/BackofficeApi/GetFootwearSizeData",GetFootwearSizeData_NewBackoffice);

app.use("/BackofficeApi/GetSocksSizeData",GetSocksSizeData_NewBackoffice);
app.use("/BackofficeApi/GetSocksColorData",GetSocksColorData_NewBackoffice);


app.use("/BackofficeApi/AddFootwearVariant",AddFootwearVariant_NewBackoffice);
app.use("/BackofficeApi/AddFootwearVariantImage",AddFootwearVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddFootwearVariantVendorPricing",AddFootwearVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/GetFootwearVariantList",GetFootwearVariantList_NewBackoffice);

app.use("/BackofficeApi/AddSocksVariant",AddSocksVariant_NewBackoffice);
app.use("/BackofficeApi/AddSocksVariantImage",AddSocksVariantImage_NewBackoffice);
app.use("/BackofficeApi/AddSocksVariantVendorPricing",AddSocksVariantVendorPricing_NewBackoffice);
app.use("/BackofficeApi/GetSocksVariantList",GetSocksVariantList_NewBackoffice);

app.use("/BackofficeApi/GetVendorFacilitiesData",GetVendorFacilitiesData_NewBackoffice);
app.use("/BackofficeApi/GetVendorLicenseData",GetVendorLicenseData_NewBackoffice);
app.use("/BackofficeApi/GetVendorAccreditationData",GetVendorAccreditationData_NewBackoffice);


app.use("/BackofficeApi/AddSocksColorMaster",AddSocksColorMaster_NewBackoffice);
app.use("/BackofficeApi/GetSocksColorMasterList",GetSocksColorMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteSocksColorMaster",DeleteSocksColorMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksColorMaster",UpdateSocksColorMaster_NewBackoffice);

app.use("/BackofficeApi/UpdateVendor",UpdateVendor_NewBackoffice);
app.use("/BackofficeApi/AddVendorLicenseMaster",AddVendorLicenseMaster_NewBackoffice);
app.use("/BackofficeApi/GetVendorLicenseMasterList",GetVendorLicenseMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteVendorLicenseMaster",DeleteVendorLicenseMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorLicenseMaster",UpdateVendorLicenseMaster_NewBackoffice);


app.use("/BackofficeApi/AddAccreditationMaster",AddAccreditationMaster_NewBackoffice);
app.use("/BackofficeApi/GetAccreditationMasterList",GetAccreditationMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteAccreditationMaster",DeleteAccreditationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccreditationMaster",UpdateAccreditationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateAccreditationMasterLogo",UpdateAccreditationMasterLogo_NewBackoffice);


app.use("/BackofficeApi/AddVendorFacilityMaster",AddVendorFacilityMaster_NewBackoffice);
app.use("/BackofficeApi/GetVendorFacilitiesMasterList",GetVendorFacilitiesMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteVendorFacilityMaster",DeleteVendorFacilityMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorFacilitiesMaster",UpdateVendorFacilitiesMaster_NewBackoffice);

app.use("/BackofficeApi/AddQualificationMaster",AddQualificationMaster_NewBackoffice);
app.use("/BackofficeApi/GetQualificationMasterList",GetQualificationMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteQualificationMaster",DeleteQualificationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateQualificationMaster",UpdateQualificationMaster_NewBackoffice);

app.use("/BackofficeApi/AddSpecializationMaster",AddSpecializationMaster_NewBackoffice);
app.use("/BackofficeApi/GetSpecializationMasterList",GetSpecializationMasterList_NewBackoffice);
app.use("/BackofficeApi/DeleteSpecializationMaster",DeleteSpecializationMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateSpecializationMaster",UpdateSpecializationMaster_NewBackoffice);

app.use("/BackofficeApi/DeleteFoodVariantImage",DeleteFoodVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodVariant",UpdateFoodVariant_NewBackoffice);


app.use("/BackofficeApi/DeleteBookVariantImage",DeleteBookVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateBookVariant",UpdateBookVariant_NewBackoffice);


app.use("/BackofficeApi/DeleteFootwearVariantImage",DeleteFootwearVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearVariant",UpdateFootwearVariant_NewBackoffice);

app.use("/BackofficeApi/DeleteSocksVariantImage",DeleteSocksVariantImage_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksVariant",UpdateSocksVariant_NewBackoffice);


app.use("/BackofficeApi/GetUserMenu",GetUserMenu_NewBackoffice);
app.use("/BackofficeApi/GetUserSubMenu",GetUserSubMenu_NewBackoffice);

app.use("/BackofficeApi/GetMenuList",GetMenuList_NewBackoffice);
app.use("/BackofficeApi/GetSubMenuList",GetSubMenuList_NewBackoffice);

app.use("/BackofficeApi/AddUserMenu",AddUserMenu_NewBackoffice);
app.use("/BackofficeApi/AddUserSubMenu",AddUserSubMenu_NewBackoffice);

app.use("/BackofficeApi/GetUserSubMenuAccessRights",GetUserSubMenuAccessRights_NewBackoffice);


app.use("/BackofficeApi/GetUserMenuList",GetUserMenuList_NewBackoffice);
app.use("/BackofficeApi/GetUserSubMenuList",GetUserSubMenuList_NewBackoffice)

app.use("/BackofficeApi/UpdateMenuRights",UpdateMenuRights_NewBackoffice);
app.use("/BackofficeApi/UpdateSubMenuRights",UpdateSubMenuRights_NewBackoffice)
app.use("/BackofficeApi/UpdateDoctorApprovalStatus",UpdateDoctorApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateDietitianApprovalStatus",UpdateDietitianApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateHealthCenterApprovalStatus",UpdateHealthCenterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateVendorApprovalStatus",UpdateVendorApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateFoodItemMasterApprovalStatus",UpdateFoodItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearItemMasterApprovalStatus",UpdateFootwearItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateBooksItemMasterApprovalStatus",UpdateBooksItemMasterApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksItemMasterApprovalStatus",UpdateSocksItemMasterApprovalStatus_NewBackoffice)
app.use("/BackofficeApi/UpdateFoodVariantApprovalStatus",UpdateFoodVariantApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateFootwearVariantApprovalStatus",UpdateFootwearVariantApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateBookVariantApprovalStatus",UpdateBookVariantApprovalStatus_NewBackoffice);
app.use("/BackofficeApi/UpdateSocksVariantApprovalStatus",UpdateSocksVariantApprovalStatus_NewBackoffice)

app.use("/BackofficeApi/GetUserInfoData",GetUserInfoData_NewBackoffice)


app.use("/BackofficeApi/AddOffer",AddOffer_NewBackoffice)
app.use("/BackofficeApi/GetOffer",GetOffer_NewBackoffice)
app.use("/BackofficeApi/UpdateOffer",UpdateOffer_NewBackoffice)


app.use("/BackofficeApi/AddUserAddressMapping",AddUserAddressMapping_NewBackoffice)
app.use("/BackofficeApi/GetUserAddressMapping",GetUserAddressMapping_NewBackoffice)
app.use("/BackofficeApi/DeleteUserAddressMapping",DeleteUserAddressMapping_NewBackoffice)




app.use("/BackofficeApi/GetVendorOrderById",GetVendorOrderById_NewBackoffice)



app.use("/BackofficeApi/GetOrderVendor",GetOrderVendor_NewBackoffice)


app.use("/BackofficeApi/AddSellWithUs",AddSellWithUs_NewBackoffice)
app.use("/BackofficeApi/GetSellWithUs",GetSellWithUs_NewBackoffice)
app.use("/BackofficeApi/AddInsurance",AddInsurance_NewBackoffice)
app.use("/BackofficeApi/GetInsurance",GetInsurance_NewBackoffice)



app.use("/BackofficeApi/AddUserFamilyInfoMapping",AddUserFamilyInfoMapping_NewBackoffice)
app.use("/BackofficeApi/UpdateUserInfoBasic",UpdateUserInfoBasic_NewBackoffice)
app.use("/BackofficeApi/UpdateUserDiabeticProfile",UpdateUserDiabeticProfile_NewBackoffice)
app.use("/BackofficeApi/GetUserInfoByID",GetUserInfoByID_NewBackoffice)
app.use("/BackofficeApi/DeleteUserFamilyInfoMapping",DeleteUserFamilyInfoMapping_NewBackoffice)

app.use("/BackofficeApi/Updateblogpublish",Updateblogpublish_NewBackoffice)

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
app.use("/BackofficeApi/AddOrder",AddOrder_NewBackoffice);
app.use("/BackofficeApi/AddOrderDetail",AddOrderDetail_NewBackoffice);

app.use("/BackofficeApi/GetSplitOrders",GetSplitOrders_NewBackoffice);
app.use("/BackofficeApi/GetSettleOrders",GetSettleOrders_NewBackoffice);
app.use("/BackofficeApi/GetSplitOrderDetails",GetSplitOrderDetails_NewBackoffice);
app.use("/BackofficeApi/AddPaymentRelease",AddPaymentRelease_NewBackoffice);

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


app.use("/BackofficeApi/GetFootwearListing",GetFootwearListing_NewBackoffice);
app.use("/BackofficeApi/GetFootwearBrandData",GetFootwearBrandData_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryWebsiteData",GetFoodCategoryWebsiteData_NewBackoffice);
app.use("/BackofficeApi/GetFoodListing",GetFoodListing_NewBackoffice);

app.use("/BackofficeApi/GetSocksListing",GetSocksListing_NewBackoffice);
app.use("/BackofficeApi/GetSocksBrandData",GetSocksBrandData_NewBackoffice);

app.use("/BackofficeApi/GetFootwearMasterDetailsWebsite",GetFootwearMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearVariantDetailsWebsite",GetFootwearVariantDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearGenderListingWebsite",GetFootwearGenderListingWebsite_NewBackoffice);

app.use("/BackofficeApi/GetSocksMasterDetailsWebsite",GetSocksMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksVariantDetailsWebsite",GetSocksVariantDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksGenderListingWebsite",GetSocksGenderListingWebsite_NewBackoffice);

app.use("/BackofficeApi/GetFilterFootwearListing",GetFilterFootwearListing_NewBackoffice);
app.use("/BackofficeApi/GetFilterSocksListing",GetFilterSocksListing_NewBackoffice);
app.use("/BackofficeApi/GetFoodBrandData",GetFoodBrandData_NewBackoffice);
app.use("/BackofficeApi/GetFoodFlavourDataFilter",GetFoodFlavourDataFilter_NewBackoffice);
app.use("/BackofficeApi/GetFoodFilterDataFilter",GetFoodFilterDataFilter_NewBackoffice);
app.use("/BackofficeApi/GetFoodPriceDataFilter",GetFoodPriceDataFilter_NewBackoffice);

app.use("/BackofficeApi/GetFoodMasterDetailsWebsite",GetFoodMasterDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFoodCategoryListingWebsite",GetFoodCategoryListingWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFoodVariantDetailsWebsite",GetFoodVariantDetailsWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFilterFoodListing",GetFilterFoodListing_NewBackoffice);


app.use("/BackofficeApi/AddShoppingCart",AddShoppingCart_NewBackoffice);

app.use("/BackofficeApi/GetCartFoodVariant",GetCartFoodVariant_NewBackoffice);
app.use("/BackofficeApi/GetCartFootwearVariant",GetCartFootwearVariant_NewBackoffice);
app.use("/BackofficeApi/GetCartSocksVariant",GetCartSocksVariant_NewBackoffice);
app.use("/BackofficeApi/GetCartFoodVariantCookie",GetCartFoodVariantCookie_NewBackoffice);
app.use("/BackofficeApi/GetCartFootwearVariantCookie",GetCartFootwearVariantCookie_NewBackoffice);
app.use("/BackofficeApi/GetCartSocksVariantCookie",GetCartSocksVariantCookie_NewBackoffice);

app.use("/BackofficeApi/DeductShoppingCart",DeductShoppingCart_NewBackoffice);
app.use("/BackofficeApi/DeleteItemShoppingCart",DeleteItemShoppingCart_NewBackoffice);

app.use("/BackofficeApi/ClearShoppingCart",ClearShoppingCart_NewBackoffice);
app.use("/BackofficeApi/GetExtraCharges",GetExtraCharges_NewBackoffice);
app.use("/BackofficeApi/GetOfferWebsite",GetOfferWebsite_NewBackoffice);

app.use("/BackofficeApi/GetAddressCustomer",GetAddressCustomer_NewBackoffice);
app.use("/BackofficeApi/GetNewOrders",GetNewOrders_NewBackoffice);
app.use("/BackofficeApi/GetOrderDetail",GetOrderDetail_NewBackoffice);

app.use("/BackofficeApi/GetFoodOrderDetail",GetFoodOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetSocksOrderDetail",GetSocksOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetFootwearOrderDetail",GetFootwearOrderDetail_NewBackoffice);


app.use("/BackofficeApi/Get_OrderVendorByOrderID",Get_OrderVendorByOrderID_NewBackoffice);
app.use("/BackofficeApi/Get_OrderVendorDetailByOrderVendorID_NewBackoffice",Get_OrderVendorDetailByOrderVendorID_NewBackoffice);


app.use("/BackofficeApi/Get_FoodProductByOrderVendorDetailID_NewBackoffice",Get_FoodProductByOrderVendorDetailID_NewBackoffice);
app.use("/BackofficeApi/Get_FootWearProductByOrderVendorDetailID_NewBackoffice",Get_FootWearProductByOrderVendorDetailID_NewBackoffice);
app.use("/BackofficeApi/Get_SocksProductByOrderVendorDetailID_NewBackoffice",Get_SocksProductByOrderVendorDetailID_NewBackoffice);

app.use("/BackofficeApi/Get_BackOfficeDashboardCount_ByDate_NewBackoffice",Get_BackOfficeDashboardCount_ByDate_NewBackoffice);
app.use("/BackofficeApi/Get_BackOfficeDashboardTop5Customer_NewBackoffice",Get_BackOfficeDashboardTop5Customer_NewBackoffice);
app.use("/BackofficeApi/Get_BackOfficeDashboardTop5Order_NewBackoffice",Get_BackOfficeDashboardTop5Order_NewBackoffice);


//-----------------------------------------New API -------------------------------------------------------------

app.use("/BackofficeApi/GetHealthCenterDoctorMapping",GetHealthCenterDoctorMapping_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterDietitianMapping",GetHealthCenterDietitianMapping_NewBackoffice);
app.use("/BackofficeApi/IfEmailExistsSocial",IfEmailExistsSocial_NewBackoffice);



//-----------------------Vendor-----------------------
app.use("/BackofficeApi/VendorAuth",VendorAuth_NewBackoffice);
app.use("/BackofficeApi/ChangeVendorPassword",ChangeVendorPassword_NewBackoffice);
app.use("/BackofficeApi/AddVendorOrder",AddVendorOrder_NewBackoffice);
app.use("/BackofficeApi/AddVendorOrderDetail",AddVendorOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorById",GetVendorById_NewBackoffice);

app.use("/BackofficeApi/CustomerOrderMailer",CustomerOrderMailer_NewBackoffice);
app.use("/BackofficeApi/VendorOrderMailer",VendorOrderMailer_NewBackoffice);


app.use("/BackofficeApi/GetVendorOrderDetail",GetVendorOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorFoodOrderDetail",GetVendorFoodOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorFootwearOrderDetail",GetVendorFootwearOrderDetail_NewBackoffice);
app.use("/BackofficeApi/GetVendorSocksOrderDetail",GetVendorSocksOrderDetail_NewBackoffice);

app.use("/BackofficeApi/AddWishlist",AddWishlist_NewBackoffice);
app.use("/BackofficeApi/DeleteItemWishlist",DeleteItemWishlist_NewBackoffice);

app.use("/BackofficeApi/GetWishlistFoodVariant",GetWishlistFoodVariant_NewBackoffice);
app.use("/BackofficeApi/GetWishlistFootwearVariant",GetWishlistFootwearVariant_NewBackoffice);
app.use("/BackofficeApi/GetWishlistSocksVariant",GetWishlistSocksVariant_NewBackoffice);

app.use("/BackofficeApi/GetFootwearSizeDataWebsite",GetFootwearSizeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearColorDataWebsite",GetFootwearColorDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearTypeDataWebsite",GetFootwearTypeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearPriceDataFilter",GetFootwearPriceDataFilter_NewBackoffice);

app.use("/BackofficeApi/GetSocksSizeDataWebsite",GetSocksSizeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksColorDataWebsite",GetSocksColorDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksTypeDataWebsite",GetSocksTypeDataWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksPriceDataFilter",GetSocksPriceDataFilter_NewBackoffice);

app.use("/BackofficeApi/GetFoodHomePageWebsite",GetFoodHomePageWebsite_NewBackoffice);
app.use("/BackofficeApi/GetFootwearHomePageWebsite",GetFootwearHomePageWebsite_NewBackoffice);
app.use("/BackofficeApi/GetSocksHomePageWebsite",GetSocksHomePageWebsite_NewBackoffice);

app.use("/BackofficeApi/AddTransactionLog",AddTransactionLog_NewBackoffice);
app.use("/BackofficeApi/Response",Response_NewBackoffice);
app.use("/BackofficeApi/PaymentResponse",PaymentResponse_NewBackoffice);

app.use("/BackofficeApi/UpdateCustomerPhoto",UpdateCustomerPhoto_NewBackoffice);


app.use("/BackofficeApi/GetHealthCenterDoctorWeb",GetHealthCenterDoctorWeb_NewBackoffice);
app.use("/BackofficeApi/GetDoctorHealthCenterWeb",GetDoctorHealthCenterWeb_NewBackoffice);
app.use("/BackofficeApi/GetHealthCenterNutritionistWeb",GetHealthCenterNutritionistWeb_NewBackoffice);
app.use("/BackofficeApi/Get_UserFamilyInfoByIDWeb",Get_UserFamilyInfoByIDWeb_NewBackoffice);
app.use("/BackofficeApi/DeleteCustomerAddress",DeleteCustomerAddress_NewBackoffice);

app.use("/BackofficeApi/UpdateUserAddressMapping",UpdateUserAddressMapping_NewBackoffice);
app.use("/BackofficeApi/GetOrderHistoryWebsite",GetOrderHistoryWebsite_NewBackoffice);


app.use("/BackofficeApi/GetNutritionistHealthCenterWeb",GetNutritionistHealthCenterWeb_NewBackoffice);

app.use("/BackofficeApi/GetFoodVendorDataAssign",GetFoodVendorDataAssign_NewBackoffice);
app.use("/BackofficeApi/GetFootwearVendorDataAssign",GetFootwearVendorDataAssign_NewBackoffice);
app.use("/BackofficeApi/GetSocksVendorDataAssign",GetSocksVendorDataAssign_NewBackoffice);

app.use("/BackofficeApi/GetBlogSearchWebsite",GetBlogSearchWebsite_NewBackoffice);
app.use("/BackofficeApi/ContactUsMailer",ContactUsMailer_NewBackoffice);

app.use("/BackofficeApi/GetFoodListingSearchPageWeb",GetFoodListingSearchPageWeb_NewBackoffice);
app.use("/BackofficeApi/GetCustomerEmailDetails",GetCustomerEmailDetails_NewBackoffice);
app.use("/BackofficeApi/UpdateOrderConfirmationStatus",UpdateOrderConfirmationStatus_NewBackoffice);
app.use("/BackofficeApi/GetUserInfoEmail",GetUserInfoEmail_NewBackoffice);



app.use("/BackofficeApi/Get_TcsMaster_NewBackoffice",Get_TcsMaster_NewBackoffice);
app.use("/BackofficeApi/Get_TdsMaster_NewBackoffice",Get_TdsMaster_NewBackoffice);
app.use("/BackofficeApi/Update_TcsMaster_NewBackoffice",Update_TcsMaster_NewBackoffice);
app.use("/BackofficeApi/Update_TdsMaster_NewBackoffice",Update_TdsMaster_NewBackoffice);

app.use("/BackofficeApi/GetSplitOrders",GetSplitOrders_NewBackoffice);
app.use("/BackofficeApi/GetSettleOrders",GetSettleOrders_NewBackoffice);

app.use("/BackofficeApi/AddSplitOrders",AddSplitOrders_NewBackoffice);
app.use("/BackofficeApi/GetSplitOrderDetails",GetSplitOrderDetails_NewBackoffice);
app.use("/BackofficeApi/AddPaymentRelease",AddPaymentRelease_NewBackoffice);



app.use("/BackofficeApi/GetSocksMetaData",GetSocksMetaData_NewBackoffice);
app.use("/BackofficeApi/GetFoodMetaData",GetFoodMetaData_NewBackoffice);
app.use("/BackofficeApi/GetFootwearMetaData",GetFootwearMetaData_NewBackoffice);


app.use("/BackofficeApi/Get_ReturnMaster_NewBackoffice",Get_ReturnMaster_NewBackoffice);
app.use("/BackofficeApi/GetRefundOrdersForRelease",GetRefundOrdersForRelease_NewBackoffice);
app.use("/BackofficeApi/UpdateReturnStatus",UpdateReturnStatus_NewBackoffice);
app.use("/BackofficeApi/GetPaymentSplitFromOrder",GetPaymentSplitFromOrder_NewBackoffice);
app.use("/BackofficeApi/AddPaymentRefund",AddPaymentRefund_NewBackoffice);

app.use("/BackofficeApi/GetNewOrderForVerify",GetNewOrderForVerify_NewBackoffice);
app.use("/BackofficeApi/VerifyOrders",VerifyOrders_NewBackoffice);

app.use("/BackofficeApi/GetDashboarshMonthWiseOrdersSales",GetDashboarshMonthWiseOrdersSales_NewBackoffice);

app.use("/BackofficeApi/GetBlogAll",GetBlogAll_NewBackoffice);

app.use("/BackofficeApi/GetCancelOrders",GetCancelOrders_NewBackoffice);

app.use("/BackofficeApi/UpdateCODServiceMaster",UpdateCODServiceMaster_NewBackoffice);
app.use("/BackofficeApi/GetCodMaster",GetCodMaster_NewBackoffice);

app.use("/BackofficeApi/GetOrderDataReports",GetOrderDataReports_NewBackoffice);
app.use("/BackofficeApi/GetCustomerDataReports",GetCustomerDataReports_NewBackoffice);

app.use("/BackofficeApi/GetFoodProductDataReports",GetFoodProductDataReports_NewBackoffice);
app.use("/BackofficeApi/GetFootwearProductDataReports",GetFootwearProductDataReports_NewBackoffice);
app.use("/BackofficeApi/GetSocksProductDataReports",GetSocksProductDataReports_NewBackoffice);

app.use("/BackofficeApi/GetVendorDataReports",GetVendorDataReports_NewBackoffice);

app.use("/BackofficeApi/GetOrderDetailDataReport",GetOrderDetailDataReport_NewBackoffice);

app.use("/BackofficeApi/ForgotPasswordStaff",ForgotPasswordStaff_NewBackoffice);
app.use("/BackofficeApi/ChangePasswordByAdmin",ChangePasswordByAdmin_NewBackoffice);


//----------------------------- Education Module -------------------------------------//
    
app.use("/BackofficeApi/GetChapterMasterList", GetChapterMasterList_NewBackoffice);
app.use("/BackofficeApi/AddChapterMaster",AddChapterMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateChapterMasterBgImage",UpdateChapterMasterBgImage_NewBackoffice);
app.use("/BackofficeApi/DeleteChapterMaster",DeleteChapterMaster_NewBackoffice);
app.use("/BackofficeApi/UpdateChapterMaster",UpdateChapterMaster_NewBackoffice);


app.use("/BackofficeApi/AddTopic", AddTopic_NewBackoffice);
app.use("/BackofficeApi/ListTopic", ListTopic_NewBackoffice);
app.use("/BackofficeApi/UpdateTopic", UpdateTopic_NewBackoffice);
app.use("/BackofficeApi/DeleteTopic", DeleteTopic_NewBackoffice);

app.use("/BackofficeApi/AddQuestion", AddQuestion_NewBackoffice);
app.use("/BackofficeApi/ AddQuestionWithOption", AddQuestionWithOption_NewBackoffice);
app.use("/BackofficeApi/ListQuestion", ListQuestion_NewBackoffice);
app.use("/BackofficeApi/ListQuestionById", ListQuestionById_NewBackoffice);
app.use("/BackofficeApi/ListQuestionAll", ListQuestionAll_NewBackoffice);
app.use("/BackofficeApi/UpdateQuestion", UpdateQuestion_NewBackoffice);
// app.use("/BackofficeApi/UpdateQuestionAnswer", UpdateQuestionAnswer_NewBackoffice);
app.use("/BackofficeApi/DeleteQuestion", DeleteQuestion_NewBackoffice);

app.use("/BackofficeApi/AddOption", AddOption_NewBackoffice);
app.use("/BackofficeApi/ListOption", ListOption_NewBackoffice);
app.use("/BackofficeApi/UpdateOption", UpdateOption_NewBackoffice);
app.use("/BackofficeApi/DeleteOption", DeleteOption_NewBackoffice);

app.use("/BackofficeApi/AddCongratulation", AddCongratulation_NewBackoffice);
app.use("/BackofficeApi/ListCongratulation", ListCongratulation_NewBackoffice);
app.use("/BackofficeApi/UpdateCongratulation", UpdateCongratulation_NewBackoffice);
app.use("/BackofficeApi/DeleteCongratulation", DeleteCongratulation_NewBackoffice);


module.exports = app;



