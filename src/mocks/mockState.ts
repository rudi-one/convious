import {mockAppsState, mockEmptyAppsState} from 'src/mocks/mockApps';
import {mockMusicState} from 'src/mocks/mockMusic';
import {mockUIState} from 'src/mocks/mockUI';

export const mockState: any = {
  appsState: mockAppsState,
  musicState: mockMusicState,
  uiState: mockUIState,
};

export const mockStateWithEmptyAppsState: any = {
  appsState: mockEmptyAppsState,
  uiState: mockUIState,
};
