class ApiService {
  constructor(){
    if (ApiService.Instance){
      return ApiService.Instance;
    };
    this.baseUrl = `http://localhost:5000`;
    ApiService.Instance = this;
  };

  getWalletStat = async () => {
    try {
      const data = await fetch(`${this.baseUrl}/wallet`);
      const json = data.json();
      return json;
    } catch (e) {
      return {status: 'networkError'};
    };
  };
};

export { ApiService };