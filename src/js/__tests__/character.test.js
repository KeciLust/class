/* eslint-disable no-unused-vars */
import Character from '../character';
import Bowman from '../Bowman';
import { expect } from '@jest/globals';

test('Small name', () => {
  function char() { const character = new Character('I', 'Bowman'); }

  expect(char).toThrowError(new Error('Слишком короткое имя!'));
});
test('Long name', () => {
  function char() { const character = new Character('ImVeryLongName', 'Bowman'); }

  expect(char).toThrowError(new Error('Слишком длинное имя!'));
});
test('Absent name', () => {
  function char() { const character = new Character('', 'Bowman'); }

  expect(char).toThrowError(new Error('Введите имя!'));
});
test('Class', () => {
  function char() { const character = new Character('ImName', 'B'); }

  expect(char).toThrowError(new Error('Введите существующий класс!'));
});
test('Bowman', () => {
  const char = new Bowman('Denis', 'Bowman'); 

  expect(char.attack).toBe(`25`);
});
