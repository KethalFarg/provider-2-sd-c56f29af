
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BasicsCover from './pages/BasicsCover';
import BasicsInfo from './pages/BasicsInfo';
import BasicsType from './pages/BasicsType';
import BasicsSource from './pages/BasicsSource';
import BasicsExperience from './pages/BasicsExperience';
import PracticeCover from './pages/PracticeCover';
import PracticeEquipment from './pages/PracticeEquipment';
import PracticeTherapies from './pages/PracticeTherapies';
import PracticeMachines from './pages/PracticeMachines';
import PatientFlowCover from './pages/PatientFlowCover';
import PatientFlowCapacity from './pages/PatientFlowCapacity';
import PatientFlowAdvertising from './pages/PatientFlowAdvertising';
import PatientFlowImaging from './pages/PatientFlowImaging';
import PatientFlowSessions from './pages/PatientFlowSessions';
import PatientFlowFrequency from './pages/PatientFlowFrequency';
import PatientFlowDuration from './pages/PatientFlowDuration';
import PricingCover from './pages/PricingCover';
import PricingCost from './pages/PricingCost';
import PricingFinancing from './pages/PricingFinancing';
import PricingFinancingPct from './pages/PricingFinancingPct';
import PricingCloseRate from './pages/PricingCloseRate';
import GoalsCover from './pages/GoalsCover';
import GoalsPricing from './pages/GoalsPricing';
import GoalsProcess from './pages/GoalsProcess';
import GoalsAdsHistory from './pages/GoalsAdsHistory';
import GoalsAdsExperience from './pages/GoalsAdsExperience';
import GoalsPatientTarget from './pages/GoalsPatientTarget';
import ProcessingPage from './pages/ProcessingPage';
import CompletionPage from './pages/CompletionPage';

// Wrapper to allow navigation from Landing Page
const LandingWrapper = () => {
  const navigate = useNavigate();
  // Pass a prop or handle the button click in LandingPage to navigate to /basics/cover
  // For now, we'll need to update LandingPage to use useNavigate or Link
  return <LandingPage />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/basics/cover" element={<BasicsCover />} />
        <Route path="/basics/step-1" element={<BasicsInfo />} />
        <Route path="/basics/step-2" element={<BasicsType />} />
        <Route path="/basics/step-3" element={<BasicsSource />} />
        <Route path="/basics/step-4" element={<BasicsExperience />} />

        <Route path="/practice/cover" element={<PracticeCover />} />
        <Route path="/practice/step-1" element={<PracticeEquipment />} />
        <Route path="/practice/step-2" element={<PracticeTherapies />} />
        <Route path="/practice/step-3" element={<PracticeMachines />} />

        <Route path="/patient-flow/cover" element={<PatientFlowCover />} />
        <Route path="/patient-flow/step-1" element={<PatientFlowCapacity />} />
        <Route path="/patient-flow/step-2" element={<PatientFlowAdvertising />} />
        <Route path="/patient-flow/step-3" element={<PatientFlowImaging />} />
        <Route path="/patient-flow/step-4" element={<PatientFlowSessions />} />
        <Route path="/patient-flow/step-5" element={<PatientFlowFrequency />} />
        <Route path="/patient-flow/step-6" element={<PatientFlowDuration />} />

        <Route path="/pricing/cover" element={<PricingCover />} />
        <Route path="/pricing/step-1" element={<PricingCost />} />
        <Route path="/pricing/step-2" element={<PricingFinancing />} />
        <Route path="/pricing/step-3" element={<PricingFinancingPct />} />
        <Route path="/pricing/step-4" element={<PricingCloseRate />} />

        <Route path="/goals/cover" element={<GoalsCover />} />
        <Route path="/goals/step-1" element={<GoalsPricing />} />
        <Route path="/goals/step-2" element={<GoalsProcess />} />
        <Route path="/goals/step-3" element={<GoalsAdsHistory />} />
        <Route path="/goals/step-4" element={<GoalsAdsExperience />} />
        <Route path="/goals/step-5" element={<GoalsPatientTarget />} />

        <Route path="/processing" element={<ProcessingPage />} />
        <Route path="/completion" element={<CompletionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
