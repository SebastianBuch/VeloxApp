import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { StatsPage } from '../pages/stats/stats';
import { RegisterPage } from "../pages/register/register";
import { ReceiptPage } from '../pages/receipt/receipt';
import { ScanpromptPage } from '../pages/scanprompt/scanprompt';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Vibration } from '@ionic-native/vibration';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AuthProvider } from '../providers/auth/auth';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { StatusProvider } from '../providers/status/status';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBb6IS8sAHNKDefiHCGOHUJG6w9uoei0Uc",
  authDomain: "velox-e581c.firebaseapp.com",
  databaseURL: "https://velox-e581c.firebaseio.com",
  projectId: "velox-e581c",
  storageBucket: "velox-e581c.appspot.com",
  messagingSenderId: "554354475559"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    StatsPage,
    RegisterPage,
    ReceiptPage,
    ScanpromptPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    StatsPage,
    RegisterPage,
    ReceiptPage,
    ScanpromptPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    NgxQRCodeModule,
    Vibration,
    NativeStorage,
    ScreenOrientation,
    AuthProvider,
    ProductServiceProvider,
    StatusProvider,
    AngularFireDatabase
]
})
export class AppModule {}
