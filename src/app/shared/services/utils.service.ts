import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private profile = new BehaviorSubject('default');
  profileStatus = this.profile.asObservable()
  constructor(
    private toast: ToastrService
  ) { }

  /*storage*/
  set(key, data){
  	window.localStorage.setItem(key, JSON.stringify(data));
  }

  get(key){
  	return JSON.parse(window.localStorage.getItem(key));
  }

  update(key, dataKey, data){
    let BData = this.get(key);
    this.removeData(key);
    BData[dataKey] = data;
    window.localStorage.setItem(key, JSON.stringify(BData));
  }

  removeData(key){
  	window.localStorage.removeItem(key);
  }

  clear(){
  	window.localStorage.clear();
  }

  /*toaster*/
  alert(type, msg){
    switch (type) {
      case "success":
        this.toast.success(msg, 'SUCCESS');
        break;
      case "info":
        this.toast.info(msg, 'INFORMATION');
        break;
      case "error":
        this.toast.error(msg, 'ERROR');
        break;
      case "warn":
        this.toast.warning(msg, 'WARNING');
        break;
      default:
        this.toast.success(msg, 'SUCCESS');
        break;
    }
  }

  /*location service*/
  // setLocation(callback){
  //   navigator.geolocation.getCurrentPosition((data)=> {
  //     this.getAddressFromMarker(data['coords']['latitude'], data['coords']['longitude'], callback);
  //   });
  // }

  // getAddressFromMarker(lat, lng, callback){
  //   var that = this;
  //   var loc_str = that.get('bringness_data').location.address_string;
  //   if(loc_str != "") callback();
  //   var geocoder = new google.maps.Geocoder();
  //   geocoder.geocode
  //     ({
  //         latLng: {lat: lat, lng: lng}
  //     }, 
  //     function(results, status) 
  //     {
  //       that.update('bringness_data', 'location', {
  //         address_string: results.length != 0 ? results[2].formatted_address : '',
  //         lat: lat,
  //         long: lng
  //       });
  //       callback();
  //     }
  //   );
  // }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  profileChanged(msg){
    this.profile.next(msg);
  }
}
