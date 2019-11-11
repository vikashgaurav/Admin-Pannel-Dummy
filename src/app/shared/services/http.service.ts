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

  // user management
  getUserList(){
    return this.http.get('admin/usersList');
  }

  createNewUser(data){
    return this.http.post('admin/createUser', data);
  }

  deleteUser(data){
    return this.http.post('admin/deleteUser', data);
  }

  blockUser(data){
    return this.http.post('admin/blockUser', data);
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

  //get professional
  getProfessionalList() {
    return this.http.get('admin/professionalList');
  }

  deleteProfessional(data) {
    return this.http.post('admin/deleteProfessional', data);
  }

  blockProfessional(data) {
    return this.http.post('admin/blockProfessional', data);
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
}
