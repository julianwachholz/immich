import { DomainModule } from '@app/domain';
import { InfraModule } from '@app/infra';
import { ExifEntity } from '@app/infra/db/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  BackgroundTaskProcessor,
  ClipEncodingProcessor,
  ObjectTaggingProcessor,
  SearchIndexProcessor,
  StorageTemplateMigrationProcessor,
  ThumbnailGeneratorProcessor,
} from './processors';
import { MetadataExtractionProcessor } from './processors/metadata-extraction.processor';
import { VideoTranscodeProcessor } from './processors/video-transcode.processor';

@Module({
  imports: [
    //
    DomainModule.register({ imports: [InfraModule] }),
    TypeOrmModule.forFeature([ExifEntity]),
  ],
  providers: [
    ThumbnailGeneratorProcessor,
    MetadataExtractionProcessor,
    VideoTranscodeProcessor,
    ObjectTaggingProcessor,
    ClipEncodingProcessor,
    StorageTemplateMigrationProcessor,
    BackgroundTaskProcessor,
    SearchIndexProcessor,
  ],
})
export class MicroservicesModule {}
