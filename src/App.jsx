import  Header  from './components/Header.jsx';
import  UserInfo  from './components/UserInfo.jsx';
import  MainContainer from './components/MainContainer.jsx';
import  Wrapper  from './components/Wrapper.jsx';
import  CardContainer  from './components/CardContainer.jsx';
import  Privacy  from './components/Privacy.jsx';
import  Card  from './components/Card.jsx';


function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Wrapper>
          <UserInfo />
          <main>
            <Privacy />
            <CardContainer>
            <Card 
              title="New air routes that promise cheap flights in" 
              author="Gregory Watkins" 
            />

            <Card 
              title="New air routes that promise cheap flights in" 
              author="Gregory Watkins" 
            />
      
            <Card 
              title="New air routes that promise cheap flights in"
              author="Gregory Watkins" 
              share="#discussionaboutanimgttdds…"
              plays={88}
              likes={24}
            />
      
            <Card 
              title="New air routes that promise cheap flights in"
              author="Gregory Watkins" 
              isLink={true}
              plays={88}
              likes={24}
            />
            </CardContainer>
          </main>
        </Wrapper>
      </MainContainer>
    </>
  );
}

export default App;