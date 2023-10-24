import get from "axios";

import type { Category } from "src/components/models";
import type { AxiosResponse } from "axios";


export async function getLanding(): Promise<Category> {
    const res: AxiosResponse<Category> = await get("https://la-tournee-web-dev.osc-fr1.scalingo.io/web/stores/1657031023080x131691197342183490/categories/landing");
    return res.data;
}
