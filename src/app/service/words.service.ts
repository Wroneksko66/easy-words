import {Injectable} from '@angular/core';
import {WORDS} from "../data/data-base";
import {Type, WordType} from "../data/models";

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];


  constructor() {
    this.words = WORDS;
  }

  getWords(): WordType[] {
    return this.words;
  }

  getNouns(): WordType[] {
    return this.nouns;
  }

  getVerbs(): WordType[] {
    return this.verbs;
  }

  addNoun(noun: WordType) {
    this.nouns.push(noun);
  }

  addVerb(value: WordType) {
    this.verbs.push(value);
  }

  check() {

    this.nouns.map(word => (word.correct = word.type === Type.NOUN));
    this.verbs.map(word => (word.correct = word.type === Type.VERB));
  }
}
