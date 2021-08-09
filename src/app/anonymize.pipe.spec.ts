import { AnonymizePipe } from './module/supplier/pipes/anonymize.pipe';

describe('AnonymizePipe', () => {
  it('create an instance', () => {
    const pipe = new AnonymizePipe();
    expect(pipe).toBeTruthy();
  });
});
