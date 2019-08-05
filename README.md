# R10 - React native project

Hi! this is a project created using **React Native**. This application will display information about the R10 event.

## React native (android - Ios)
* Screens: 
> About
> Faves
> Schedule
> Map

R10 has a different menu depending on the platform that is been used to access it:
>* on Ios will be posted at the bottom
>* on Android will appear at the left side of the screen, like a drawer.  

## Techonologies 
* React Native Realm as the embedded database.
* React Native Linear Gradient to generate the gradient backgrounds in the app
* React Native Vector Icons
* React Maps
* React accordion
* GraphQl


## Flow for adding a favorite session.

Accessing to session can be happen from schedule and from faves screens.

```mermaid
sequenceDiagram
Schedule ->> Session: onPress.
Faves-->>Session: onPress
Session-->>Speaker: click to show more info of the speaker 
Note right of Session: Session can be added <br/>or remove from <br/>sessions.
Note left of Speaker: Click on more info <br/> will redirect to <br/> Wikipedia
```
