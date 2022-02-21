import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {verification} from '../redux/authentication/actions';
import {getStudents} from '../redux/students/actions';

import Splashscreen from '../screens/splashscreen';

// Screens
import SigninPage from '../screens/authentication/signin';
import Dashboard from '../screens/dashboard';

// Children
import ChildSupport from '../screens/children/child-support';
import ConceptualAssessment from '../screens/children/conceptual-assessment';
import Aspects from '../screens/children/aspects'; // Fora do escopo do projeto

// Credits
import AdjustsCredits from '../screens/credits/adjusts';
import PaymentCredits from '../screens/credits/payments';
import Extract from '../screens/credits/extracts';
import PurchaseCredits from '../screens/credits/purchase';
import Transfers from '../screens/credits/transfers';
import TransferCredit from '../screens/credits/transfers/transfer-credits';
import TransferResume from '../screens/credits/transfers/transfer-resume';
import TransferComplete from '../screens/credits/transfers/transfer-complete';
import PaymentCreditCard from '../screens/credits/payments/credit-card';

// Weekly Menu
import WeeklyMenu from '../screens/weekly-menu';

// Calendar
import CalendarPage from '../screens/calendar';
import SingleMonth from '../screens/calendar/single-month';
import DetailsCaledar from '../screens/calendar/components/calendar/detailsCaledar';

// Support - Chat - Comunication
import Support from '../screens/support';
import Chat from '../screens/support/chat';
import Comunication from '../screens/support/comunication';
import DetailsComunication from '../screens/support/comunication/detailsComunication';

// Content Schedule
import ContentsHours from '../screens/contents-hours';

// Test Performance
import TestPerformance from '../screens/test-performance';
import ListEvaluationTemplates from '../screens/evaluation-templates/list';

// Evaluations
import SelectEvaluation from '../screens/evaluation-templates/select-evaluation';
import EvaluationTemplates from '../screens/evaluation-templates';
import BoletimFrequence from '../screens/boletim'
import BoletosComponent from '../screens/boletos'
import AcompanhamentoInfantil from '../screens/infantil'

import Manual from '../screens/manual';
import Solicitacion from '../screens/solicitacion';
import Messages from '../screens/messages';
import detailsAlert from '../screens/alert/detailsAlert';
import Registration from '../screens/alert/registration';
import detailsMenssages from '../screens/messages/detailsMenssages';


const Stack = createStackNavigator();

class Navigation extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(getStudents());
  };

  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          navigationOptions: {
            headerShown: false,
          },
        }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Signin" component={SigninPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ChildSupport" component={ChildSupport} />
        <Stack.Screen name="Extract" component={Extract} />
        <Stack.Screen name="PurchaseCredits" component={PurchaseCredits} />
        <Stack.Screen name="Transfers" component={Transfers} />
        <Stack.Screen name="AdjustsCredits" component={AdjustsCredits} />
        <Stack.Screen name="TransferCredit" component={TransferCredit} />
        <Stack.Screen name="PaymentCredits" component={PaymentCredits} />
        <Stack.Screen name="PaymentCreditCard" component={PaymentCreditCard} />
        <Stack.Screen name="TransferResume" component={TransferResume} />
        <Stack.Screen name="TransferComplete" component={TransferComplete} />
        <Stack.Screen name="WeeklyMenu" component={WeeklyMenu} />
        <Stack.Screen name="CalendarPage" component={CalendarPage} />
        
        <Stack.Screen name="DetailsCaledar" component={DetailsCaledar} />

        <Stack.Screen name="SingleMonth" component={SingleMonth} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Comunication" component={Comunication} />
        <Stack.Screen name="DetailsComunication" component={DetailsComunication} />
        
        <Stack.Screen name="Solicitacion" component={Solicitacion} />

        <Stack.Screen name="ContentsHours" component={ContentsHours} />
        <Stack.Screen name="BoletimFrequence" component={BoletimFrequence} />
        <Stack.Screen name="BoletosComponent" component={BoletosComponent} />
        <Stack.Screen name="AcompanhamentoInfantil" component={AcompanhamentoInfantil} />

        <Stack.Screen name="Manual" component={Manual} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="detailsAlert" component={detailsAlert} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="detailsMenssages" component={detailsMenssages} />


        <Stack.Screen
          name="ConceptualAssessment"
          component={ConceptualAssessment}
        />
        <Stack.Screen name="TestPerformance" component={TestPerformance} />
        <Stack.Screen
          name="EvaluationTemplates"
          component={EvaluationTemplates}
        />
        <Stack.Screen
          name="ListEvaluationTemplates"
          component={ListEvaluationTemplates}
        />
        <Stack.Screen name="SelectEvaluation" component={SelectEvaluation} />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    students: state.students,
  };
};

export default connect(mapStateToProps)(Navigation);
