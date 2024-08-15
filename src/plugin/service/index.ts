import fetchWithInterceptor from "@/plugin/api/instance";
import {TestService} from "@/plugin/service/test";

const Host_API= process.env.BACKEND_URL ?? 'https://jsonplaceholder.typicode.com/users';
export const fetchServices = {
    testService: TestService(Host_API ),
}