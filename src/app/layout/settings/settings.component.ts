import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { UtilsService } from '../../shared/services/utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

declare var $;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  aboutus:any;
  privacy:any;
  terms:any;

  faqForm: FormGroup;
  submitted: boolean = false;

  faqList:any = [];
  selectedDeleteQues:any;
  selectedEditQues:any;

  updateFAQ:boolean = false;
  constructor(private api: HttpService, private utils: UtilsService, fb: FormBuilder) {
    this.faqForm = fb.group({
      ques: ['', [Validators.required]],
      ans: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.getSettings();
    this.saveSetting();
     this.getFAQs();
  }

  saveSetting(){
    debugger
    let dataToSend = {
      about_us: this.aboutus,
      privacy_policy: this.privacy,
      terms: this.terms
    };
    this.api.saveSetting(dataToSend).subscribe(
      data=> {
        debugger;
        this.aboutus = data['response']['about_us'];
        this.terms = data['response']['terms'];
        this.privacy = data['response']['privacy_policy'];
          this.utils.alert('success', 'Get setting successfully');
          $('#edit-modal').modal('hide');
      },
      error=> {
        console.log(error);
        debugger;
      }
    );
  }

  getSettings(){
    this.api.saveSetting({}).subscribe(
      data=> {
        this.aboutus = (data['about_us']);
        this.privacy = (data['privacy_policy']);
        this.terms = (data['terms']);
      },
      error=> {
        console.log(error);
        debugger;
      }
    );
  }

  get f(){ return this.faqForm.controls; }

  getFAQs(){
    this.api.getFAQList().subscribe(
      data=> {
        this.faqList = data['response'];
      },
      error=> {
        console.log(error);
      }
    );
  }

  addFaq(){
    this.submitted = true;
    if(this.faqForm.invalid) return;
    console.log(this.faqForm.value);
    let dataToSend = {
      question: this.faqForm.value.ques,
      answer: this.faqForm.value.ans
    };
    this.api.addQuestion(dataToSend).subscribe(
      data=> {
        this.faqList.push(data['response']);
        this.faqForm.patchValue({
          ques: '',
          ans: ''
        });
        this.submitted = false;
      },
      error=> {
        console.log(error);
        debugger;
      }
    );
  }

  selectDeleteQuestion(item) {
    this.selectedDeleteQues = item;
  }

  deleteQues(){
    let dataToSend = {
      id: this.selectedDeleteQues._id
    };
    this.api.deleteQuestion(dataToSend).subscribe(
      data=> {
        this.utils.alert('success', data['message']);
        let index = this.faqList.indexOf(this.selectedDeleteQues);
        this.faqList.splice(index, 1);
      },
      error=> {
        console.log(error);
        debugger;
      }
    );
  }

  selectEditQuestion(ques){
    this.selectedEditQues = ques;
    this.updateFAQ = true;
    this.faqForm.setValue({
      ques: this.selectedEditQues.question,
      ans: this.selectedEditQues.answer
    });
  }

  updateFaq(){
    let dataToSend = {
      id: this.selectedEditQues._id,
      question: this.faqForm.value.ques,
      answer: this.faqForm.value.ans
    }
    this.api.updateFaq(dataToSend).subscribe(
      data=> {
        this.utils.alert('success', data['message']);
        let index = this.faqList.indexOf(this.selectedEditQues);
        this.faqList.splice(index, 1, data['response']);
      },
      error=> {
        console.log(error);
        debugger;
      }
    );
  }

  resetForm(){
    this.updateFAQ = false;
    this.faqForm.setValue({
      ques: '',
      ans: ''
    });
    this.selectedEditQues = {};
  }
}
