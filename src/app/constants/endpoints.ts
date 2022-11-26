export class Endpoints {

  public static readonly LESTRO_FE_REDIRECT_URL = 'http://localhost:4200'
  public static readonly BACKEND_BASE_ENDPOINT = 'http://localhost:8081/payment-mock';
  public static readonly POST_CONFIRM_TRANSFER = `${Endpoints.BACKEND_BASE_ENDPOINT}/confirm-transfer/`;
}
