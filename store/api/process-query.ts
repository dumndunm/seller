// import { NotificationTypeEnum } from 'store/notifications/model';
// import { addNotification } from 'store/notifications/slice';
// import { checkIsVisibleError } from 'store/notifications/utils';
// import {
//   checkIsApiRequestError,
//   checkIsJsonParseRequestError,
//   checkIsNetworkRequestError,
//   checkIsTimeoutRequestError,
// } from '@/lib/api/fetch/errors';
// import type { AnyErrorReponseT } from '@/lib/api/seller-proxy-api/models';
import type { OnErrorT } from '@/lib/rtq-helpers';
import { createHandleQueryStarted } from '@/lib/rtq-helpers';

const defaultOnError: OnErrorT = async (api, rejectReason) => {
  const { error } = rejectReason;

  // if (checkIsNetworkRequestError(error) || checkIsTimeoutRequestError(error)) {
  //   api.dispatch(
  //     addNotification({
  //       type: NotificationTypeEnum.badConnection,
  //     })
  //   );
  // }

  // if (checkIsJsonParseRequestError(error)) {
  //   api.dispatch(
  //     addNotification({
  //       type: NotificationTypeEnum.unknownServerError,
  //       payload: {},
  //     })
  //   );
  // }

  // if (
  //   checkIsApiRequestError<AnyErrorReponseT>(error) &&
  //   checkIsVisibleError(error)
  // ) {
  //   api.dispatch(
  //     addNotification({
  //       type: NotificationTypeEnum.unknownServerError,
  //       payload: {
  //         eventId: error.response.meta.eventId,
  //       },
  //     })
  //   );
  // }
};

const defaultHandleQueryStarted = createHandleQueryStarted({
  onError: defaultOnError,
});

export { defaultHandleQueryStarted, defaultOnError };
