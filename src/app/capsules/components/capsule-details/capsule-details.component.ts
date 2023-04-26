import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSpinnerService, CapsuleApiService, ChannelEvent, EventChannelService } from '@app/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.scss'],
  providers: [MessageService]
})
export class CapsuleDetailsComponent implements OnInit, OnDestroy {
  resourceUrl: SafeResourceUrl;
  capsuleId: string;
  queryParamUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private eventChannel: EventChannelService,
    private spinner: AppSpinnerService,
    private messageService: MessageService,
    private capsuleApi: CapsuleApiService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.queryParamUrl = atob(
      this.route.snapshot.queryParamMap.get('url') || btoa('https://tekcapsule.blog')
    );
    this.resourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.queryParamUrl);
    this.capsuleId = this.route.snapshot.paramMap.get('capsuleId');
    setTimeout(() => {
      this.eventChannel.publish({ event: ChannelEvent.HideCapsuleNavTabs });
    });
    
  }

  ngOnDestroy(): void {
    this.resourceUrl = '';
  }

  getNavBreadcrumbs(): { label: string; url?: string }[] {
    const crumbs: { label: string; url?: string }[] = [];
    const queryTab = this.route.snapshot.queryParamMap.get('tab');
    const queryTitle = this.route.snapshot.queryParamMap.get('title');

    if (queryTab === 'trending') {
      crumbs.push({ label: 'My Feeds', url: 'myfeeds' }, { label: 'Trending', url: 'trending' });
    } else if (queryTab === 'editorspick') {
      crumbs.push(
        { label: 'My Feeds', url: 'myfeeds' },
        { label: 'Editors Pick', url: 'editorspick' }
      );
    } else {
      crumbs.push({ label: 'My Feeds', url: 'myfeeds' });
    }

    if (queryTitle) {
      crumbs.push({ label: queryTitle });
    }

    return crumbs;
  }

  navigateToCapsulePage(url: string): void {
    this.router.navigate(['capsules', url]);
  }

  onIFrameClose(): void {
    const queryParamTab = this.route.snapshot.queryParamMap.get('tab') || 'myfeeds';
    this.resourceUrl = '';
    this.router.navigate(['capsules', queryParamTab]);
  }

  onAfterIframeLoaded(): void {
    if(this.resourceUrl) {
      this.spinner.hide();
    }
  }

  onRecommendClick() {
    this.capsuleApi.updateCapsuleRecommendCount(this.capsuleId).subscribe(data=> {
      this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Recommandation done successfully' });
    });
  }

  onShareClick() {
    this.clipboard.copy(this.queryParamUrl);
    this.messageService.add({ key: 'tc', severity: 'success', summary: '', detail: 'Link copied. You can share it now.' });
  }
}
