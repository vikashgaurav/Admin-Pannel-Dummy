import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  login(data){
    return this.http.post('admin/login', data);
  }

  forgotPassword(data){
    return this.http.post('admin/forgotPassword', data);
  }
  verifyotp(data) {
    return this.http.post('admin/verifyotp', data);
  }

  logout(data){
    return this.http.post('admin/logout', data);
  }
  
  resetPassword(data){
    return this.http.post('admin/reset_password', data);
  }

  updateProfile(data){
    return this.http.post('admin/updateProfile', data);
  }

  changePassword(data){
    return this.http.post('admin/change_password', data);
  }

 
  updateUser(data){
    return this.http.post('admin/updateUser', data);
  }

  saveSetting(data){
    return this.http.post('admin/saveSettings', data);
  }

  // faq management
  getFAQList(){
    return this.http.get('admin/faqList');
  }

  addQuestion(data){
    return this.http.post('admin/addFaqQuestion', data);
  }

  deleteQuestion(data){
    return this.http.post('admin/deleteFaqQuestion', data);
  }

  updateFaq(data){
    return this.http.post('admin/updateFaqQuestion', data);
  }
  getcontent(){
    return this.http.get('admin/getcontent')
  }



  //get categories
  getCategorieList() {
    return this.http.get('admin/get_create_cat');
  }
  create_cat(data){
    return this.http.post('admin/create_cat', data);
  }
  delete_create_cat(data){
    return this.http.post('admin/delete_create_cat', data);
  }
  edit_create_cat(data){
    return this.http.post('admin/edit_create_cat', data);
  }

  //get_farmer
  getfarmerList() {
    return this.http.get('admin/get_farmer_data');
  }
  getsupplierList() {
    return this.http.get('admin/get_supplier_data');
  }
  getagronomistList() {
    return this.http.get('admin/get_Agronomist_data');
  }
  block_user(data){
    return this.http.post('admin/blockUser',data);
  }
  delete_user(data){
    return this.http.post('admin/deleteUser', data);
  }
  //education 

  get_list_of_education(data){
    return this.http.post('admin/get_list_of_education', data);
  }

  add_list_data(data){
    return this.http.post('admin/add_list_data', data);
  }

  edit_education(data){
  return this.http.post('admin/edit_education', data);
  }

  //crop
  get_crop_admin() {
    return this.http.get('admin/get_crop_admin');
  }
  add_admin_crop(data) {
    return this.http.post('admin/add_admin_crop' , data);
  }

  //bank
  get_bank_list(){
    return this.http.get('admin/get_bank_list');
  }
  add_admin_bank(data){
    return this.http.post('admin/add_admin_bank', data);
  }
}
