import {Component, OnInit} from '@angular/core';
import {WordType} from "../../data/models";
import {WordsService} from "../../service/words.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  item: WordType | null = null; // item o type WordType

  constructor(private wordsService: WordsService) {
  }

  ngOnInit(): void {
    this.fetchWords();
  }

  addToNouns(word: WordType): void {
    this.wordsService.addNoun(word);
    this.fetchWords();
  }

  addToVerbs(word: WordType): void {
    this.wordsService.addVerb(word);
    this.fetchWords();
  }

  check(): void {
    this.wordsService.check();
  }

  private fetchWords(): void {
    this.item= this.wordsService.getWords().shift() || null;
  }
}
