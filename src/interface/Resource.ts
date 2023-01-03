import { ObjectId } from 'mongodb';

interface Resource {
    crawl: ObjectId;
    url: string;
    status: number;
    title?: string;
    description?: string;
    h1?: string[];
}

export default Resource;
