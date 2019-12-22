import axios from 'axios';

import { ApiResponse } from '~/lib/services/types';


export type DashboardRequestDto = {
  id: number | null;
  uid?: string;
  type: string;
  data: string;
};

export type DashboardResponseDto = {
  dashboard: DashboardRequestDto;
}

class DashboardService {
  private static DashboardService: DashboardService;

  static getInstance() {
    if (!DashboardService.DashboardService) {
      DashboardService.DashboardService = new DashboardService();
    }
    return DashboardService.DashboardService;
  }

  async createDashboard(body: DashboardRequestDto): Promise<ApiResponse<DashboardResponseDto>> {
    return axios.post('/api/dashboards', body);
  }

  async updateDashboard(body: DashboardRequestDto): Promise<ApiResponse<DashboardResponseDto>> {
    return axios.put('/api/dashboards', body);
  }

  async geDashboard(): Promise<ApiResponse<DashboardResponseDto>> {
    return axios.get('/api/dashboards');
  }

  async getDashboardByUID(uid: string): Promise<ApiResponse<DashboardResponseDto>> {
    return axios.get(`/api/dashboards/uid/${uid}`);
  }
}

export default DashboardService.getInstance();
