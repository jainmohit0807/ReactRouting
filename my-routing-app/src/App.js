
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ButtonWithPersistentData, ControlledForms, CounterButton, DataLoader, HomePage, NavBarForms, NavigateProgrammatically, PageNotFound, ProtectedPage, StudentGroup, UserData, UserProfile } from './Pages'
import { UnControlledForms } from './Pages/UnControlledForms';
import { NavBar } from './NavBar';
import { BasicPageCB } from './Class_based/BasicPageCB';
import { CounterButtonCB } from './Class_based/CounterButtonCB';

function App() {

  const people = [{
    name: 'Mohit',
    age: 25,
  },
  {
    name: 'Mayank',
    age: 24,
  }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <>
          <Router>
            <NavBar />
            <Switch>
              <Route path='/pages' exact>
                <HomePage name='Mohit' message={5} />
              </Route>
              <Route path='/pages/CounterButton'>
                <CounterButton />
              </Route>
              <Route path='/pages/CounterButton/:abc'>
                <CounterButton />
              </Route>
              <Route path='/pages/StudentGroup'>
                <StudentGroup listofStudents={people} />
              </Route>
              <Route path='/' exact>
              </Route>
              <Route path='/Pages/protectedPage'>
                <ProtectedPage />
              </Route>
              <Route path='/Pages/NavigateProgrammatically'>
                <NavigateProgrammatically />
              </Route>
              <Route path='/Pages/UserData'>
                <UserData />
              </Route>

              <Route path='/Pages/Form'>
                <Router>
                  <NavBarForms />
                  <Route path='/Pages/ControlledForm'>
                    <ControlledForms />
                  </Route>
                  <Route path='/Pages/UnControlledForm'>
                    <UnControlledForms />
                  </Route>
                </Router>
              </Route>

              <Route path='/class_based' exact>
                <BasicPageCB message={5}/>
              </Route>
              <Route path='/class_based/CounterButtonCB'>
                <CounterButtonCB />
              </Route>

              <Route path='/Pages/ButtonWithPersistentData'>
                <ButtonWithPersistentData />
              </Route>

              <Route path='/Pages/UserProfile'>
                  <DataLoader>
                    <UserProfile />
                  </DataLoader>

              </Route>


              <Route>
                <PageNotFound />
              </Route>

            </Switch>

          </Router>
        </>
      </header>
    </div>
  );
}

export default App;
