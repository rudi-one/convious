import {mockAppsState, mockEmptyAppsState} from 'src/mocks/mockApps';
import {mockUIState} from 'src/mocks/mockUI';

export const mockState: any = {
  appsState: mockAppsState,
  uiState: mockUIState,
};

export const mockStateWithEmptyAppsState: any = {
  appsState: mockEmptyAppsState,
  uiState: mockUIState,
};
