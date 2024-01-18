# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Explanation about File-Folder Layout

assets: Folder containing static files used in the application, such as images and CSS files related to the general style and theme.

images: Folder containing static images used in the application.
styles: Folder containing CSS files related to the general style and theme.

components: Folder containing fundamental components of the application.

auth: Components related to user authentication.

Login.jsx: Component for user login.
Registration.jsx: Component for user registration.
appointments: Components related to appointment management.

AppointmentCalendar.jsx: Component displaying the appointment calendar.
AppointmentList.jsx: Component showing the list of appointments.
AppointmentModal.jsx: Modal component for appointment details.
clinic: Components related to clinic management.

ClinicCalendar.jsx: Component displaying the clinic's appointment calendar.
ClinicStaffManagement.jsx: Component managing clinic staff.
PatientHistory.jsx: Component displaying patient history.
ClinicDashboard.jsx: Home page component for clinic administrators.
messaging: Components related to messaging.

PatientDoctorMessaging.jsx: Secure messaging component between patients and doctors.
AdminDoctorMessaging.jsx: Messaging component between administrators and doctors.
router: Components related to routing.

PublicRoute.jsx: Higher-level component for public routes (no authentication required).
PrivateRoute.jsx: Higher-level component for private routes (authentication required).
notifications: Components related to notifications.

SpecialNotifications.jsx: Component for special notifications.
AppointmentReminders.jsx: Component for appointment reminder notifications.
common: Common-use components.

Header.jsx: Common header component.
Footer.jsx: Common footer component.
pages: Folder containing page-level components of the application.

PatientDashboard.jsx: Home page for patients.
DoctorDashboard.jsx: Home page for doctors.
AdminDashboard.jsx: Home page for administrators.
services: Folder containing services for communication with the backend and business logic.

api.jsx: API service for making background requests.
auth.jsx: Authentication service.
appointment.jsx: Service for appointment-related operations.
clinic.jsx: Service for clinic-related operations.
messaging.jsx: Service for messaging functionality.
notification.jsx: Service for managing notifications.
helpers: Folder containing helper functions and methods.

ToastNotify.jsx: Helper functions and methods.
store: Folder containing Redux store, actions, and reducers.

actions: Subfolder for Redux actions.

authActions.jsx: Actions related to authentication.
appointmentActions.jsx: Actions related to appointments.
clinicActions.jsx: Actions related to clinic management.
messagingActions.jsx: Actions related to messaging.
notificationActions.jsx: Actions related to notifications.
reducers: Subfolder for Redux reducers.

authReducer.jsx: Reducer for authentication status.
appointmentReducer.jsx: Reducer for appointment-related state.
clinicReducer.jsx: Reducer for clinic-related state.
messagingReducer.jsx: Reducer for messaging state.
notificationReducer.jsx: Reducer for notification state.
App.js: Main component, routing, and where the main application structure is defined.

App.css: General style for the entire application.

index.js: Entry point of the application.

routes.js: Configuration for application routes.

index.css: General style for the index.html file.

## Dosya duzeni hakkinda aciklama

assets: Uygulamadaki statik dosyaların (resimler ve stil dosyaları gibi) bulunduğu klasör.

images: Uygulamada kullanılan statik resimlerin bulunduğu klasör.
styles: Genel stil ve tema ile ilgili CSS dosyalarının bulunduğu klasör.
components: Uygulamanın temel bileşenlerinin bulunduğu klasör.

auth: Kullanıcı kimlik doğrulama işlemleri için bileşenler.

Login.jsx: Kullanıcı girişi için bileşen.
Registration.jsx: Kullanıcı kaydı için bileşen.
appointments: Randevu yönetimi ile ilgili bileşenler.

AppointmentCalendar.jsx: Randevu takvimini gösteren bileşen.
AppointmentList.jsx: Randevu listesini gösteren bileşen.
AppointmentModal.jsx: Randevu detaylarını içeren modal bileşen.
clinic: Klinik yönetimi ile ilgili bileşenler.

ClinicCalendar.jsx: Klinik randevularını gösteren bileşen.
ClinicStaffManagement.jsx: Klinik çalışanlarını yöneten bileşen.
PatientHistory.jsx: Hasta geçmişini gösteren bileşen.
ClinicDashboard.jsx: Klinik yöneticileri için anasayfa bileşeni.
messaging: Mesajlaşma ile ilgili bileşenler.

PatientDoctorMessaging.jsx: Hastalar ile doktorlar arasında güvenli mesajlaşma bileşeni.
AdminDoctorMessaging.jsx: Yöneticiler ile doktorlar arasında mesajlaşma bileşeni.
router: Yönlendirme bileşenleri.

PublicRoute.jsx: Genel rotalar için yüksek seviyeli bileşen (kimlik doğrulama gerekmez).
PrivateRoute.jsx: Özel rotalar için yüksek seviyeli bileşen (kimlik doğrulama gereklidir).
notifications: Bildirimler ile ilgili bileşenler.

SpecialNotifications.jsx: Özel bildirimler için bileşen.
AppointmentReminders.jsx: Randevu hatırlatma bildirimleri için bileşen.
common: Genel kullanım bileşenleri.

Header.jsx: Ortak başlık bileşeni.
Footer.jsx: Ortak alt bilgi bileşeni.
pages: Uygulamanın sayfa düzeyinde bileşenlerini içeren klasör.

PatientDashboard.jsx: Hasta anasayfa sayfası.
DoctorDashboard.jsx: Doktor anasayfa sayfası.
AdminDashboard.jsx: Yönetici anasayfa sayfası.
services: Backend ile iletişim ve iş mantığı için servislerin bulunduğu klasör.

api.jsx: Arka planda istek yapmak için API servisi.
auth.jsx: Kimlik doğrulama servisi.
appointment.jsx: Randevu işlemleri için servis.
clinic.jsx: Klinik ile ilgili işlemler için servis.
messaging.jsx: Mesajlaşma işlevselliği için servis.
notification.jsx: Bildirim işlemleri için servis.
helpers: Yardımcı fonksiyonlar ve yardımcı metotlar için kullanılan klasör.

ToastNotify.jsx: Yardımcı fonksiyonlar ve metotlar.
store: Redux store, eylemler (actions) ve redüktörlerin (reducers) bulunduğu klasör.

actions: Redux eylemleri için alt klasör.

authActions.jsx: Kimlik doğrulama ile ilgili eylemler.
appointmentActions.jsx: Randevu ile ilgili eylemler.
clinicActions.jsx: Klinik ile ilgili eylemler.
messagingActions.jsx: Mesajlaşma ile ilgili eylemler.
notificationActions.jsx: Bildirim ile ilgili eylemler.
reducers: Redux redüktörleri için alt klasör.

authReducer.jsx: Kimlik doğrulama durumu için redüktör.
appointmentReducer.jsx: Randevu ile ilgili durum için redüktör.
clinicReducer.jsx: Klinik ile ilgili durum için redüktör.
messagingReducer.jsx: Mesajlaşma durumu için redüktör.
notificationReducer.jsx: Bildirim durumu için redüktör.
App.js: Ana bileşen, yönlendirme ve ana uygulama yapısının tanımlandığı yer.

App.css: Tüm uygulama için genel stil.

index.js: Uygulamanın giriş noktası.

routes.js: Uygulama rotalarının konfigürasyonu.

index.css: index.html için genel stil.
