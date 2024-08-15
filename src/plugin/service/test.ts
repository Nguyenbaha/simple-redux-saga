import fetchWithInterceptor from "@/plugin/api/instance";

export const TestService = (HOST_URL: string) => ({
    async testList() {
        return await fetchWithInterceptor(`${HOST_URL}`)
    },

})