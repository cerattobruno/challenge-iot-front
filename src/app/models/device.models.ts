export class Device {
    constructor(
        public id: number,
        public lat: number,
        public lng: number,
        public zone: string,
        public state: number,
    ) {}
}
