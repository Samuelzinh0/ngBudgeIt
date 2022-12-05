import { Component, OnInit } from '@angular/core';
import { ChannelItem } from 'src/public/models/channel-item.model';
import { UpdateEvent } from '../budget-list/budget-list.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  channelItems: ChannelItem[] = new Array<ChannelItem>();
  channelList: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addChannel(newChannel: ChannelItem) {
    this.channelItems.push(newChannel);
    this.channelList += newChannel.title;
  }
  
  deleteChannel(item: ChannelItem) {
    let index = this.channelItems.indexOf(item);
    this.channelItems.splice(index, 1);
    this.channelList = '';
  }

  updateItem(updateEvent: UpdateEvent){
    this.channelItems[this.channelItems.indexOf(updateEvent.old)] = updateEvent.new;

    this.channelList = updateEvent.old.title;
    this.channelList += updateEvent.new.title;
  }
}
