import { TestBed } from "@angular/core/testing";
import { GreetService } from "./greet.service";
describe('test suite for greetservice',()=>{

    let gs:GreetService ;

    beforeAll(()=>{
        gs = TestBed.inject(GreetService);
    })

    beforeEach(()=>{
        console.log('before each...')
    });
    it('greet() should Hello Guest',()=>{
       let gs:GreetService = new GreetService();
        expect(gs.greet('')).toEqual('Hello Guest');
    })
    it('greet(John)  should Hello John',()=>{
         expect(gs.greet('John')).toEqual('Hello John');
    })
   afterEach(()=>{
        console.log('after each...')
    });

});
 