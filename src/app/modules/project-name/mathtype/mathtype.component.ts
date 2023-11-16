import { Component, OnInit } from '@angular/core';
import Editor from '../../../../../CKEditor5-custom-build/build/ckeditor';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: '#app-mathtype',
  templateUrl: './mathtype.component.html',
  styleUrls: ['./mathtype.component.scss']
})
export class MathtypeComponent implements OnInit {

  constructor() { }
  title = 'customEditor';
  public Editor = Editor;
  ngOnInit(): void {
  }

}
