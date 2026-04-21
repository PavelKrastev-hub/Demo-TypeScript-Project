export class APIService<T> {
    private serviceUrl: string;

    constructor(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    public async getAll(): Promise<T[]> {
        const res = await fetch(this.serviceUrl);
        const data = await res.json();
        return data;
    }

    public async getById(id: number): Promise<T> {
        const res = await fetch(`${this.serviceUrl}/${id}`);
        const data = await res.json();
        return data;
    }

    public async create(itemData: T): Promise<T> {
        const res = await fetch(this.serviceUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application-json',
            },
            body: JSON.stringify(itemData),
        });
        const data = await res.json();
        return data;
    }

    public async update(itemData: T, itemId: number): Promise<T> {
        const res = await fetch(`${this.serviceUrl}/${itemId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application-json',
            },
            body: JSON.stringify(itemData),
        });
        const data = await res.json();
        return data;
    }

    public async delete(id: number): Promise<void> {
        await fetch(`${this.serviceUrl}/${id}`, {
            method: 'DELETE',
        });
    }
}