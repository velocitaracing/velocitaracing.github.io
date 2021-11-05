import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import ScrollToTop from './pages/functions/ScrollToTop'
import ScrollTopRefresh from './pages/functions/ScrollTopRefresh'

import Home from './pages/Home'
import About from './pages/About'
import OurTeam from './pages/OurTeam'
import Faculty from './pages/Faculty';
import TeamPage from './pages/TeamPage';

import Privacy from './pages/Privacy'
import TermsOfUse from './pages/TermsOfUse'
import ErrorPage404 from './pages/404';
import Careers from './pages/Careers';
import Recruit from './pages/Recruit';
import PartnerWithUs from './pages/PartnerWithUs';
import OurSponsors from './pages/OurSponsors';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import WaysToSponsor from './pages/WaysToSponsor';
import ContactSponsoraTeam from './pages/ContactSponsorTeam';
import Register from './pages/Register';
import { withRouter } from 'react-router-dom';
import Crowdfunding from './pages/Crowdfunding';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import FSeries from './pages/FSeries';
import VerifyPayment from './pages/VerifyPayment';
import Development from './pages/Development'

const Navigation = withRouter(({location})=>{
  return(
    location.pathname !== '/connect/newsletter/' && location.pathname !== '/crowdfunding/upi/checkout/'  && location.pathname !== '/crowdfunding/upi/verify-payment/' && location.pathname !== '/crowdfunding/upi/checkout/new-payment/' && location.pathname !== '/partner-with-us/contact-team/' &&  location.pathname !== '/careers/recruitment/2022/register/' && location.pathname !== '/connect/contact-us/' && <Navbar />
  )

})

const Floor = withRouter(({location})=>{
  return(
      location.pathname !== '/careers/recruitment/2022/register/' &&  location.pathname !== '/crowdfunding/upi/checkout/'  && location.pathname !== '/crowdfunding/upi/verify-payment/' && location.pathname !== '/crowdfunding/upi/checkout/new-payment/'&& <Footer />
  )

})


function App() {

  return (
    <Router basename='/'>
      <ScrollToTop />
      <ScrollTopRefresh />
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/our-team/' exact component={OurTeam} />
        <Route path= '/our-team/:id' component={TeamPage} />
        <Route path='/faculty/:id' exact component={Faculty} />
        <Route path='/series/F/' exact component={FSeries} />
        <Route path='/research-and-development/' exact component={Development} />        
        <Route path='/careers/' exact component={Careers} />        
        <Route path='/careers/recruitment/' exact component={Recruit} />
        <Route path='/careers/recruitment/2022/register/' exact component={Development} />
        <Route path='/partner-with-us/' exact component={PartnerWithUs} />
        <Route path='/partner-with-us/contact-team/' exact component={ContactSponsoraTeam} />
        <Route path='/sponsors/' exact component={OurSponsors} />
        <Route path='/crowdfunding/' exact component={Crowdfunding} />
        <Route path='/crowdfunding/upi/checkout/' exact component={Checkout} />
        <Route path='/crowdfunding/upi/checkout/new-payment/' exact component={Payment} />
        <Route path='/crowdfunding/upi/verify-payment/' exact component={VerifyPayment} />
        <Route path='/connect/contact-us/' exact component={Contact} />
        <Route path='/connect/newsletter/' exact component={Newsletter} />
        <Route path='/events/' exact component={Development} />
        <Route path='/privacy' exact component={Privacy} />
        <Route path='/terms-of-use' exact component={TermsOfUse} />
        <Route component={ErrorPage404} />
      </Switch>
      <Floor />
    </Router>
  );
}

export default App;
